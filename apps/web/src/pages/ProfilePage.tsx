/**
 * ProfilePage Component
 * Displays user dating profile, photo gallery, intentions, and "Changes Were Saved" popup modal.
 */
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BadgeCheck,
  Camera,
  Check,
  Plus,
  Save,
  Star,
  Trash2,
  Upload,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ConnectionMode, Gender, RelationshipIntention } from '@pairup/domain-types';

const SAMPLE_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800'
];

const AVAILABLE_INTERESTS = [
  { id: 'int_1', name: 'Coffee & Cafes', category: 'Food & Dining', emoji: '☕' },
  { id: 'int_2', name: 'Contemporary Art', category: 'Creative', emoji: '🎨' },
  { id: 'int_3', name: 'Street Photography', category: 'Creative', emoji: '📷' },
  { id: 'int_4', name: 'Hiking & Trekking', category: 'Outdoors', emoji: '🏔️' },
  { id: 'int_5', name: 'Live Music', category: 'Entertainment', emoji: '🎸' },
  { id: 'int_6', name: 'Badminton', category: 'Sports', emoji: '🏸' },
  { id: 'int_7', name: 'Indie Films', category: 'Entertainment', emoji: '🎬' },
  { id: 'int_8', name: 'Cooking & Baking', category: 'Food & Dining', emoji: '🍳' },
  { id: 'int_9', name: 'Yoga & Mindfulness', category: 'Wellness', emoji: '🧘' },
  { id: 'int_10', name: 'Tech & Coding', category: 'Interests', emoji: '💻' },
  { id: 'int_11', name: 'Reading & Books', category: 'Interests', emoji: '📚' },
  { id: 'int_12', name: 'Dogs & Pets', category: 'Lifestyle', emoji: '🐶' }
];

export const ProfilePage: React.FC = () => {
  const { profile, updateProfile, addPhoto, deletePhoto, setPrimaryPhoto } = useAuth();

  const [displayName, setDisplayName] = useState(profile?.displayName || '');
  const [bio, setBio] = useState(profile?.bio || '');
  const [gender, setGender] = useState<Gender>(profile?.gender || Gender.PREFER_NOT_TO_SAY);
  const [pronouns, setPronouns] = useState(profile?.pronouns || '');
  const [intention, setIntention] = useState<RelationshipIntention>(
    profile?.relationshipIntention || RelationshipIntention.LONG_TERM
  );
  const [mode, setMode] = useState<ConnectionMode>(profile?.connectionMode || ConnectionMode.BOTH);
  const [city, setCity] = useState(profile?.city || 'Mumbai');
  const [occupation, setOccupation] = useState(profile?.occupation || '');
  const [education, setEducation] = useState(profile?.education || '');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    profile?.interests?.map((i) => i.name) || ['Coffee & Cafes', 'Contemporary Art']
  );
  const [promptAnswer, setPromptAnswer] = useState(
    profile?.prompts?.[0]?.answer || 'Brewing pour-over coffee, listening to indie vinyl, and tending to balcony plants.'
  );

  // Photo upload modal state
  const [showAddPhoto, setShowAddPhoto] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize form when profile first loads
  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName || '');
      setBio(profile.bio || '');
      setGender(profile.gender || Gender.PREFER_NOT_TO_SAY);
      setPronouns(profile.pronouns || '');
      setIntention(profile.relationshipIntention || RelationshipIntention.LONG_TERM);
      setMode(profile.connectionMode || ConnectionMode.BOTH);
      setCity(profile.city || 'Mumbai');
      setOccupation(profile.occupation || '');
      setEducation(profile.education || '');
      if (profile.interests && profile.interests.length > 0) {
        setSelectedInterests(profile.interests.map((i) => i.name));
      }
      if (profile.prompts && profile.prompts.length > 0) {
        setPromptAnswer(profile.prompts[0].answer);
      }
    }
  }, [profile?.id]);

  const toggleInterest = (interestName: string) => {