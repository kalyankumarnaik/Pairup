import os
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_ZIP = os.path.join(ROOT, "PairUp-submission.zip")

IGNORED_DIRS = {
    'node_modules',
    'dist',
    'build',
    '.turbo',
    '.next',
    '.cache',
    'Pairup', # duplicate clone folder
}

IGNORED_FILES = {
    'PairUp-submission.zip',
}

def make_submission_zip():
    print(f"Packaging repository from: {ROOT}")
    print(f"Output archive target: {OUTPUT_ZIP}")
    file_count = 0
    git_file_count = 0
    
    with zipfile.ZipFile(OUTPUT_ZIP, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(ROOT):
            # Prune ignored directories in-place so os.walk skips them
            dirs[:] = [d for d in dirs if d not in IGNORED_DIRS]
            
            for file in files:
                if file in IGNORED_FILES or file.endswith('.zip'):
                    continue
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, ROOT)
                zipf.write(full_path, rel_path)
                file_count += 1
                if rel_path.startswith('.git'):
                    git_file_count += 1

    size_mb = os.path.getsize(OUTPUT_ZIP) / (1024 * 1024)
    print(f"[OK] Archive created successfully!")
    print(f"[OK] Total files: {file_count} (including {git_file_count} .git tracking files)")
    print(f"[OK] Output location: {OUTPUT_ZIP} ({size_mb:.2f} MB)")

if __name__ == '__main__':
    make_submission_zip()
