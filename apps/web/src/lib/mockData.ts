import {
  ConnectionMode,
  Conversation,
  DiscoveryCard,
  EventStatus,
  Gender,
  MatchStatus,
  MatchSummary,
  MessageStatus,
  MessageType,
  RelationshipIntention,
  SocialEvent,
  VerificationStatus,
  VoiceRoom,
  VoiceRoomRole
} from '@pairup/domain-types';

export const MOCK_DISCOVERY_CARDS: DiscoveryCard[] = [
  {
    id: 'disc_1',
    userId: 'usr_demo_1',
    displayName: 'Ananya Verma',
    age: 26,
    bio: 'Architect, plant mom, and amateur photographer. Always up for filter coffee or art gallery walks in Bandra. Let’s talk about design, vinyl records, or the best pasta in Mumbai.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.DATING_TO_MARRY,
    connectionMode: ConnectionMode.DATING,
    city: 'Mumbai',
    approximateDistanceKm: 3.5,
    latitude: 19.0596,
    longitude: 72.8295,
    interests: [
      { id: '1', name: 'Coffee & Cafes', category: 'Lifestyle', emoji: '☕' },
      { id: '2', name: 'Contemporary Art', category: 'Creative', emoji: '🎨' },
      { id: '3', name: 'Street Photography', category: 'Creative', emoji: '📷' }
    ],
    photos: [
      {
        id: 'p1',
        profileId: '1',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      },
      {
        id: 'p2',
        profileId: '1',
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
        order: 1,
        isPrimary: false,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [
      {
        id: 'prm1',
        question: 'A perfect Sunday morning looks like',
        answer: 'Brewing pour-over coffee and listening to indie vinyl.'
      }
    ],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_2',
    userId: 'usr_demo_2',
    displayName: 'Aarav Sharma',
    age: 28,
    bio: 'Fintech product designer who balances UX wireframes with weekend hiking trips and spicy street food trails. Let’s find Mumbai’s hidden sunset viewpoints.',
    gender: Gender.MAN,
    pronouns: 'he/him',
    relationshipIntention: RelationshipIntention.LONG_TERM,
    connectionMode: ConnectionMode.BOTH,
    city: 'Mumbai',
    approximateDistanceKm: 4.2,
    latitude: 19.1197,
    longitude: 72.9056,
    interests: [
      { id: '4', name: 'Hiking & Trekking', category: 'Outdoors', emoji: '🏔️' },
      { id: '5', name: 'Badminton', category: 'Sports', emoji: '🏸' },
      { id: '6', name: 'Tech & Startups', category: 'Tech', emoji: '💻' }
    ],
    photos: [
      {
        id: 'p3',
        profileId: '2',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [
      {
        id: 'prm2',
        question: 'The best way to ask me out',
        answer: 'Invite me for a badminton match or single-origin cold brew.'
      }
    ],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_3',
    userId: 'usr_demo_3',
    displayName: 'Riya Sen',
    age: 24,
    bio: 'Software engineer at a YC startup by day, live music enthusiast by night. Looking for concert buddies and coffee debates on whether tabs beat spaces.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.NEW_FRIENDS,
    connectionMode: ConnectionMode.FRIENDSHIP,
    city: 'Bengaluru',
    approximateDistanceKm: 5.8,
    latitude: 12.9784,
    longitude: 77.6408,
    interests: [
      { id: '7', name: 'Indie Rock', category: 'Music', emoji: '🎵' },
      { id: '8', name: 'Board Games', category: 'Gaming', emoji: '🎲' }
    ],
    photos: [
      {
        id: 'p4',
        profileId: '3',
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_4',
    userId: 'usr_demo_4',
    displayName: 'Kabir Mehta',
    age: 27,
    bio: 'Filmmaker and documentarian. In search of interesting human stories, cozy rooftop chai spots, and film festival partners.',
    gender: Gender.MAN,
    pronouns: 'he/him',
    relationshipIntention: RelationshipIntention.LONG_TERM,
    connectionMode: ConnectionMode.DATING,
    city: 'Delhi',
    approximateDistanceKm: 8.1,
    latitude: 28.5494,
    longitude: 77.2001,
    interests: [
      { id: '9', name: 'Cinema & Film', category: 'Arts', emoji: '🎬' },
      { id: '10', name: 'Writing & Books', category: 'Creative', emoji: '📚' }
    ],
    photos: [
      {
        id: 'p5',
        profileId: '4',
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_5',
    userId: 'usr_demo_5',
    displayName: 'Pooja Roy',
    age: 27,
    bio: 'Clinical psychologist, avid reader, and sourdough baker. Big believer in active listening, thoughtful conversations, and spontaneous weekend museum trips.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.DATING_TO_MARRY,
    connectionMode: ConnectionMode.DATING,
    city: 'Bengaluru',
    approximateDistanceKm: 2.4,
    latitude: 12.9352,
    longitude: 77.6245,
    interests: [
      { id: '11', name: 'Yoga & Mindfulness', category: 'Wellness', emoji: '🧘' },
      { id: '12', name: 'Contemporary Art', category: 'Creative', emoji: '🎨' },
      { id: '13', name: 'Sourdough Baking', category: 'Food & Dining', emoji: '🥖' }
    ],
    photos: [
      {
        id: 'p6',
        profileId: '5',
        url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [
      {
        id: 'prm3',
        question: 'My most spontaneous memory',
        answer: 'Booked a one-way sleeper train to Hampi during a long weekend with just a backpack and a sketchbook.'
      }
    ],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_6',
    userId: 'usr_demo_6',
    displayName: 'Vikram Nair',
    age: 30,
    bio: 'Aerospace engineer turned startup founder. Formula 1 nerd, marathon runner, and filter coffee purist. Tell me your best travel story.',
    gender: Gender.MAN,
    pronouns: 'he/him',
    relationshipIntention: RelationshipIntention.LONG_TERM,
    connectionMode: ConnectionMode.DATING,
    city: 'Hyderabad',
    approximateDistanceKm: 3.8,
    latitude: 17.4435,
    longitude: 78.3772,
    interests: [
      { id: '14', name: 'Formula 1', category: 'Sports', emoji: '🏎️' },
      { id: '15', name: 'Running & Marathon', category: 'Sports', emoji: '🏃' },
      { id: '16', name: 'Startup Culture', category: 'Career', emoji: '🚀' }
    ],
    photos: [
      {
        id: 'p7',
        profileId: '6',
        url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_7',
    userId: 'usr_demo_7',
    displayName: 'Tanvi Joshi',
    age: 25,
    bio: 'Graphic novelist and cafe hopper in Koregaon Park. Always looking for thrift store partners, indie cinema debates, and matcha lattes.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.NEW_FRIENDS,
    connectionMode: ConnectionMode.FRIENDSHIP,
    city: 'Pune',
    approximateDistanceKm: 1.8,
    latitude: 18.5362,
    longitude: 73.8940,
    interests: [
      { id: '17', name: 'Art & Design', category: 'Creative', emoji: '🎨' },
      { id: '18', name: 'Coffee & Cafes', category: 'Lifestyle', emoji: '☕' },
      { id: '19', name: 'Anime & Manga', category: 'Entertainment', emoji: '🍜' }
    ],
    photos: [
      {
        id: 'p8',
        profileId: '7',
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_8',
    userId: 'usr_demo_8',
    displayName: 'Rohan Sengupta',
    age: 28,
    bio: 'Culinary chef and food researcher. Passionate about regional street food history, jazz bars, and weekend cycling along the river.',
    gender: Gender.MAN,
    pronouns: 'he/him',
    relationshipIntention: RelationshipIntention.LONG_TERM,
    connectionMode: ConnectionMode.BOTH,
    city: 'Kolkata',
    approximateDistanceKm: 4.1,
    latitude: 22.5510,
    longitude: 88.3524,
    interests: [
      { id: '20', name: 'Cooking & Dining', category: 'Food & Dining', emoji: '🍳' },
      { id: '21', name: 'Jazz & Blues', category: 'Music', emoji: '🎷' },
      { id: '22', name: 'Cycling', category: 'Sports', emoji: '🚲' }
    ],
    photos: [
      {
        id: 'p9',
        profileId: '8',
        url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_9',
    userId: 'usr_demo_9',
    displayName: 'Sneha Kulkarni',
    age: 26,
    bio: 'Marine biologist & scuba instructor based near Juhu Beach. Loves sunset walks, ocean conservation, and spicy seafood.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.DATING_TO_MARRY,
    connectionMode: ConnectionMode.DATING,
    city: 'Mumbai',
    approximateDistanceKm: 1.5,
    latitude: 19.1075,
    longitude: 72.8263,
    interests: [
      { id: '23', name: 'Ocean & Diving', category: 'Outdoors', emoji: '🌊' },
      { id: '24', name: 'Dogs & Pets', category: 'Lifestyle', emoji: '🐕' },
      { id: '25', name: 'Photography', category: 'Creative', emoji: '📷' }
    ],
    photos: [
      {
        id: 'p10',
        profileId: '9',
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_10',
    userId: 'usr_demo_10',
    displayName: 'Diya Sharma',
    age: 24,
    bio: 'Theatre artist and copywriter in Central Delhi. Big fan of street plays, spicy momos, and spontaneous weekend roadtrips.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.NEW_FRIENDS,
    connectionMode: ConnectionMode.FRIENDSHIP,
    city: 'New Delhi',
    approximateDistanceKm: 2.1,
    latitude: 28.6315,
    longitude: 77.2167,
    interests: [
      { id: '26', name: 'Theatre & Acting', category: 'Arts', emoji: '🎭' },
      { id: '27', name: 'Writing & Poetry', category: 'Creative', emoji: '✍️' },
      { id: '28', name: 'Roadtrips', category: 'Travel', emoji: '🚗' }
    ],
    photos: [
      {
        id: 'p11',
        profileId: '10',
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_11',
    userId: 'usr_demo_11',
    displayName: 'Elena Rostova',
    age: 27,
    bio: 'Art curator and classical pianist based in London. Passionate about Tate Modern exhibitions, West End plays, and rainy afternoon bookstores.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.LONG_TERM,
    connectionMode: ConnectionMode.DATING,
    city: 'London',
    approximateDistanceKm: 7190,
    latitude: 51.5074,
    longitude: -0.1278,
    interests: [
      { id: '29', name: 'Contemporary Art', category: 'Creative', emoji: '🎨' },
      { id: '30', name: 'Classical Music', category: 'Music', emoji: '🎻' },
      { id: '31', name: 'Architecture', category: 'Arts', emoji: '🏛️' }
    ],
    photos: [
      {
        id: 'p12',
        profileId: '11',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_12',
    userId: 'usr_demo_12',
    displayName: 'Marcus Vance',
    age: 29,
    bio: 'AI researcher and trail runner in San Francisco. Loves exploring Marin headlands, specialty pour-overs, and discussing the future of robotics.',
    gender: Gender.MAN,
    pronouns: 'he/him',
    relationshipIntention: RelationshipIntention.LONG_TERM,
    connectionMode: ConnectionMode.BOTH,
    city: 'San Francisco',
    approximateDistanceKm: 13500,
    latitude: 37.7749,
    longitude: -122.4194,
    interests: [
      { id: '32', name: 'AI & Tech', category: 'Career', emoji: '🤖' },
      { id: '33', name: 'Trail Running', category: 'Sports', emoji: '🏃' },
      { id: '34', name: 'Specialty Coffee', category: 'Food & Dining', emoji: '☕' }
    ],
    photos: [
      {
        id: 'p13',
        profileId: '12',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_13',
    userId: 'usr_demo_13',
    displayName: 'Kenji Takahashi',
    age: 28,
    bio: 'Creative director & sound designer in Tokyo. Exploring synthesizer jams, retro ramen joints, and neon-lit street photography.',
    gender: Gender.MAN,
    pronouns: 'he/him',
    relationshipIntention: RelationshipIntention.NEW_FRIENDS,
    connectionMode: ConnectionMode.FRIENDSHIP,
    city: 'Tokyo',
    approximateDistanceKm: 6730,
    latitude: 35.6580,
    longitude: 139.7016,
    interests: [
      { id: '35', name: 'Sound Design', category: 'Creative', emoji: '🎧' },
      { id: '36', name: 'Street Photography', category: 'Creative', emoji: '📷' },
      { id: '37', name: 'Japanese Cuisine', category: 'Food & Dining', emoji: '🍜' }
    ],
    photos: [
      {
        id: 'p14',
        profileId: '13',
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_14',
    userId: 'usr_demo_14',
    displayName: 'Sophie Dupont',
    age: 26,
    bio: 'Pastry chef and vintage collector in Le Marais, Paris. Let’s find the crispiest croissants and explore flea markets along the Seine.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.DATING_TO_MARRY,
    connectionMode: ConnectionMode.DATING,
    city: 'Paris',
    approximateDistanceKm: 7010,
    latitude: 48.8566,
    longitude: 2.3522,
    interests: [
      { id: '38', name: 'Baking & Pastry', category: 'Food & Dining', emoji: '🥐' },
      { id: '39', name: 'Vintage Fashion', category: 'Lifestyle', emoji: '👗' },
      { id: '40', name: 'Cinema', category: 'Arts', emoji: '🎬' }
    ],
    photos: [
      {
        id: 'p15',
        profileId: '14',
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_15',
    userId: 'usr_demo_15',
    displayName: 'Liam O’Connor',
    age: 29,
    bio: 'Surfer and marine architect at Bondi Beach, Sydney. Morning waves, flat whites, and coastal hikes along the cliffs.',
    gender: Gender.MAN,
    pronouns: 'he/him',
    relationshipIntention: RelationshipIntention.LONG_TERM,
    connectionMode: ConnectionMode.BOTH,
    city: 'Sydney',
    approximateDistanceKm: 10150,
    latitude: -33.8688,
    longitude: 151.2093,
    interests: [
      { id: '41', name: 'Surfing', category: 'Sports', emoji: '🏄' },
      { id: '42', name: 'Ocean Conservation', category: 'Outdoors', emoji: '🌊' },
      { id: '43', name: 'Coffee', category: 'Lifestyle', emoji: '☕' }
    ],
    photos: [
      {
        id: 'p16',
        profileId: '15',
        url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_16',
    userId: 'usr_demo_16',
    displayName: 'Chloe Martin',
    age: 25,
    bio: 'Fashion publicist and podcast host living in SoHo, NYC. Always hunting for jazz speakeasies, rooftop sunsets, and spicy Thai food.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.DATING_TO_MARRY,
    connectionMode: ConnectionMode.DATING,
    city: 'New York',
    approximateDistanceKm: 12540,
    latitude: 40.7128,
    longitude: -74.0060,
    interests: [
      { id: '44', name: 'Fashion & Media', category: 'Creative', emoji: '✨' },
      { id: '45', name: 'Jazz Clubs', category: 'Music', emoji: '🎷' },
      { id: '46', name: 'Podcasting', category: 'Media', emoji: '🎙️' }
    ],
    photos: [
      {
        id: 'p17',
        profileId: '16',
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_17',
    userId: 'usr_demo_17',
    displayName: 'Mia Chen',
    age: 26,
    bio: 'Fintech product lead and urban botanist in Singapore. Passionate about hawker food stalls, night cycling along Marina Bay, and indie gaming.',
    gender: Gender.WOMAN,
    pronouns: 'she/her',
    relationshipIntention: RelationshipIntention.LONG_TERM,
    connectionMode: ConnectionMode.BOTH,
    city: 'Singapore',
    approximateDistanceKm: 3920,
    latitude: 1.3521,
    longitude: 103.8198,
    interests: [
      { id: '47', name: 'Urban Gardening', category: 'Lifestyle', emoji: '🌿' },
      { id: '48', name: 'Hawker Food', category: 'Food & Dining', emoji: '🍜' },
      { id: '49', name: 'Cycling', category: 'Sports', emoji: '🚲' }
    ],
    photos: [
      {
        id: 'p18',
        profileId: '17',
        url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  },
  {
    id: 'disc_18',
    userId: 'usr_demo_18',
    displayName: 'Zain Al-Mansoor',
    age: 31,
    bio: 'Venture investor and desert astrophotographer in Downtown Dubai. Loves supercar roadtrips, stargazing under dune skies, and specialty coffee.',
    gender: Gender.MAN,
    pronouns: 'he/him',
    relationshipIntention: RelationshipIntention.DATING_TO_MARRY,
    connectionMode: ConnectionMode.DATING,
    city: 'Dubai',
    approximateDistanceKm: 1930,
    latitude: 25.2048,
    longitude: 55.2708,
    interests: [
      { id: '50', name: 'Astrophotography', category: 'Creative', emoji: '🌌' },
      { id: '51', name: 'Venture Capital', category: 'Career', emoji: '📈' },
      { id: '52', name: 'Desert Camping', category: 'Outdoors', emoji: '⛺' }
    ],
    photos: [
      {
        id: 'p19',
        profileId: '18',
        url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
        order: 0,
        isPrimary: true,
        isModerated: true,
        createdAt: ''
      }
    ],
    prompts: [],
    verificationStatus: VerificationStatus.VERIFIED
  }
];

export const MOCK_MATCHES: MatchSummary[] = [
  {
    id: 'match_1',
    conversationId: 'conv_1',
    matchedUserId: 'usr_demo_1',
    matchedProfile: {
      displayName: 'Ananya Verma',
      age: 26,
      city: 'Mumbai',
      primaryPhotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
      isVerified: true
    },
    connectionMode: ConnectionMode.DATING,
    status: MatchStatus.ACTIVE,
    lastMessageSnippet: 'Hey! Loved your photo from the Marine Drive run 🏃‍♀️',
    lastMessageAt: new Date(Date.now() - 1800000).toISOString(),
    unreadCount: 0,
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: 'match_2',
    conversationId: 'conv_2',
    matchedUserId: 'usr_demo_3',
    matchedProfile: {
      displayName: 'Riya Sen',
      age: 24,
      city: 'Bengaluru',
      primaryPhotoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
      isVerified: true
    },
    connectionMode: ConnectionMode.FRIENDSHIP,
    status: MatchStatus.ACTIVE,
    lastMessageSnippet: 'Are you attending the indie live gig this Saturday?',
    lastMessageAt: new Date(Date.now() - 7200000).toISOString(),
    unreadCount: 1,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

export const MOCK_ROOMS: VoiceRoom[] = [
  {
    id: 'room_1',
    title: 'Late Night Chill & Chai ☕',
    description: 'Casual open voice space talking about music, life in Mumbai, and indie playlists.',
    category: 'Casual Chill',
    emoji: '☕',
    hostId: 'usr_demo_1',
    hostName: 'Ananya Verma',
    isPrivate: false,
    capacity: 50,
    activeCount: 18,
    speakers: [
      {
        userId: 'usr_demo_1',
        displayName: 'Ananya Verma',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
        role: VoiceRoomRole.HOST,
        isMuted: false,
        hasRaisedHand: false,
        joinedAt: new Date().toISOString()
      },
      {
        userId: 'usr_demo_2',
        displayName: 'Aarav Sharma',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        role: VoiceRoomRole.SPEAKER,
        isMuted: false,
        hasRaisedHand: false,
        joinedAt: new Date().toISOString()
      }
    ],
    listeners: [],
    createdAt: new Date().toISOString()
  },
  {
    id: 'room_2',
    title: 'Startup Founders & Builders Hub 🚀',
    description: 'Networking session on early-stage pitching, tech stacks, and team building.',
    category: 'Tech & Career',
    emoji: '🚀',
    hostId: 'usr_demo_2',
    hostName: 'Aarav Sharma',
    isPrivate: false,
    capacity: 100,
    activeCount: 42,
    speakers: [
      {
        userId: 'usr_demo_2',
        displayName: 'Aarav Sharma',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        role: VoiceRoomRole.HOST,
        isMuted: false,
        hasRaisedHand: false,
        joinedAt: new Date().toISOString()
      }
    ],
    listeners: [],
    createdAt: new Date().toISOString()
  }
];

export const MOCK_EVENTS: SocialEvent[] = [
  {
    id: 'event_1',
    title: 'Sunrise Coastal Cycling & Filter Coffee 🚲',
    description: 'Join friendly locals for an early morning 15km ride along Bandstand and Carter Road, followed by fresh South Indian filter coffee.',
    category: 'Fitness & Outdoors',
    emoji: '🚲',
    venueName: 'Bandra Bandstand Promenade',
    approximateLocation: 'Bandra West, Mumbai',
    city: 'Mumbai',
    latitude: 19.0435,
    longitude: 72.8194,
    approximateDistanceKm: 2.3,
    startTime: '2026-11-08T06:30:00Z',
    endTime: '2026-11-08T09:00:00Z',
    capacity: 25,
    registeredCount: 19,
    isRegistered: true,
    organizer: {
      id: 'usr_demo_1',
      displayName: 'Ananya Verma',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800'
    },
    status: EventStatus.SCHEDULED,
    createdAt: new Date().toISOString()
  },
  {
    id: 'event_2',
    title: 'Indie Board Game & Acoustic Music Night 🎲',
    description: 'An evening of Catan, Ticket to Ride, and acoustic open-mic sessions. Perfect icebreaker for new friends!',
    category: 'Social Meetup',
    emoji: '🎲',
    venueName: 'The Hive Cafe, Khar',
    approximateLocation: 'Khar West, Mumbai',
    city: 'Mumbai',
    latitude: 19.0688,
    longitude: 72.8360,
    approximateDistanceKm: 3.1,
    startTime: '2026-11-14T18:00:00Z',
    endTime: '2026-11-14T21:30:00Z',
    capacity: 35,
    registeredCount: 28,
    isRegistered: false,
    organizer: {
      id: 'usr_demo_2',
      displayName: 'Aarav Sharma',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
    },
    status: EventStatus.SCHEDULED,
    createdAt: new Date().toISOString()
  },
  {
    id: 'event_3',
    title: 'Juhu Sunset Acoustic Jam & Picnic 🏖️',
    description: 'Unwind by the Arabian Sea with beach blankets, acoustic guitar tunes, and delicious snacks with local creatives.',
    category: 'Music & Outdoors',
    emoji: '🎸',
    venueName: 'Juhu Beach Promenade (Near Novotel)',
    approximateLocation: 'Juhu, Mumbai',
    city: 'Mumbai',
    latitude: 19.0988,
    longitude: 72.8264,
    approximateDistanceKm: 4.8,
    startTime: '2026-11-16T17:00:00Z',
    endTime: '2026-11-16T20:00:00Z',
    capacity: 40,
    registeredCount: 31,
    isRegistered: false,
    organizer: {
      id: 'usr_demo_9',
      displayName: 'Sneha Kulkarni',
      avatarUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800'
    },
    status: EventStatus.SCHEDULED,
    createdAt: new Date().toISOString()
  },
  {
    id: 'event_4',
    title: 'Indiranagar Craft Beer & Tech Mixer 🍻',
    description: 'Connect with developers, founders, and designers over artisanal microbrews in the heart of Bangalore.',
    category: 'Networking',
    emoji: '🍻',
    venueName: 'Toit Brewpub, Indiranagar',
    approximateLocation: '100ft Road, Indiranagar, Bengaluru',
    city: 'Bengaluru',
    latitude: 12.9793,
    longitude: 77.6405,
    approximateDistanceKm: 1.2,
    startTime: '2026-11-20T19:00:00Z',
    endTime: '2026-11-20T22:30:00Z',
    capacity: 50,
    registeredCount: 42,
    isRegistered: false,
    organizer: {
      id: 'usr_demo_3',
      displayName: 'Riya Sen',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800'
    },
    status: EventStatus.SCHEDULED,
    createdAt: new Date().toISOString()
  },
  {
    id: 'event_5',
    title: 'Hauz Khas Heritage Walk & Rooftop Chai ☕',
    description: 'Explore 14th-century monument ruins followed by warm Masala Chai and sunset photography overlooking the lake.',
    category: 'Arts & Culture',
    emoji: '🏛️',
    venueName: 'Hauz Khas Fort & Village',
    approximateLocation: 'Hauz Khas Village, New Delhi',
    city: 'Delhi',
    latitude: 28.5534,
    longitude: 77.1942,
    approximateDistanceKm: 1.8,
    startTime: '2026-11-22T16:30:00Z',
    endTime: '2026-11-22T19:30:00Z',
    capacity: 30,
    registeredCount: 24,
    isRegistered: false,
    organizer: {
      id: 'usr_demo_4',
      displayName: 'Kabir Mehta',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800'
    },
    status: EventStatus.SCHEDULED,
    createdAt: new Date().toISOString()
  }
];

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv_1',
    matchId: 'match_1',
    participants: [
      {
        userId: 'usr_demo_current',
        displayName: 'You',
        isOnline: true
      },
      {
        userId: 'usr_demo_1',
        displayName: 'Ananya Verma',
        primaryPhotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
        isOnline: true
      }
    ],
    lastMessage: {
      id: 'msg_1',
      conversationId: 'conv_1',
      senderId: 'usr_demo_1',
      type: MessageType.TEXT,
      content: 'Hey! Loved your photo from the Marine Drive run 🏃‍♀️',
      status: MessageStatus.DELIVERED,
      attachments: [],
      reactions: [
        {
          id: 'rx_1',
          messageId: 'msg_1',
          userId: 'usr_demo_current',
          emoji: '❤️',
          createdAt: new Date().toISOString()
        }
      ],
      createdAt: new Date(Date.now() - 1800000).toISOString()
    },
    unreadCount: 0,
    isMuted: false,
    updatedAt: new Date(Date.now() - 1800000).toISOString()
  },
  {
    id: 'conv_2',
    matchId: 'match_2',
    participants: [
      {
        userId: 'usr_demo_current',
        displayName: 'You',
        isOnline: true
      },
      {
        userId: 'usr_demo_3',
        displayName: 'Riya Sen',
        primaryPhotoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
        isOnline: true
      }
    ],
    lastMessage: {
      id: 'msg_2',
      conversationId: 'conv_2',
      senderId: 'usr_demo_3',
      type: MessageType.TEXT,
      content: 'Are you attending the indie live gig this Saturday?',
      status: MessageStatus.READ,
      attachments: [],
      reactions: [],
      createdAt: new Date(Date.now() - 7200000).toISOString()
    },
    unreadCount: 1,
    isMuted: false,
    updatedAt: new Date(Date.now() - 7200000).toISOString()
  }
];
