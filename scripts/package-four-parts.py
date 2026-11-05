import os
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

IGNORED_DIRS = {
    'node_modules',
    'dist',
    'build',
    '.turbo',
    '.next',
    '.cache',
    'Pairup', # duplicate subfolder
    '.git',   # friends will clone/init their own git or use repo git
    'scratch'
}

IGNORED_EXTS = {
    '.zip'
}

def should_skip(path):
    parts = path.replace('\\', '/').split('/')
    for p in parts:
        if p in IGNORED_DIRS:
            return True
    ext = os.path.splitext(path)[1].lower()
    if ext in IGNORED_EXTS:
        return True
    # Never include real local .env with secrets
    if os.path.basename(path) == '.env':
        return True
    return False

def add_file_to_zip(zipf, full_path, arc_path):
    if os.path.exists(full_path) and not should_skip(full_path):
        zipf.write(full_path, arc_path)

def add_dir_to_zip(zipf, dir_path, base_dir=""):
    if not os.path.exists(dir_path):
        return 0
    count = 0
    for root, dirs, files in os.walk(dir_path):
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRS]
        for f in files:
            full_path = os.path.join(root, f)
            if not should_skip(full_path):
                rel = os.path.relpath(full_path, dir_path)
                arc_path = os.path.join(base_dir, rel) if base_dir else rel
                zipf.write(full_path, arc_path)
                count += 1
    return count

# ==============================================================================
# PART 1: Shared Core, Contracts, Domain Types & Foundation
# ==============================================================================
def package_part1():
    out_path = os.path.join(ROOT, "PairUp-Part1-SharedCore.zip")
    print(f"\n[1/4] Building {os.path.basename(out_path)}...")
    count = 0
    with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as z:
        # Packages
        count += add_dir_to_zip(z, os.path.join(ROOT, "packages"), "packages")
        
        # Root configs
        root_files = [
            "package.json",
            "pnpm-workspace.yaml",
            "pnpm-lock.yaml",
            "tsconfig.base.json",
            "turbo.json",
            "example.env",
            ".gitignore",
            ".npmrc"
        ]
        for rf in root_files:
            fp = os.path.join(ROOT, rf)
            if os.path.exists(fp):
                z.write(fp, rf)
                count += 1
                
        # Instructions
        instructions = """# PairUp — Part 1: Shared Core & Foundation Architecture
Assignee: Friend 1 (Platform Core Lead)

## Contents
- `packages/domain-types`: 60 Enterprise domain aggregates, models, events, enums.
- `packages/contracts`: 60 Enterprise REST route specs, API payloads, socket events.
- `packages/api-client`: Universal typed SDK client and 60 enterprise domain SDKs.
- `packages/validation`: Zod schemas for auth, profiles, discovery, chat, age checks.
- `packages/design-tokens`: Colors, celebratory gradients, typography tokens.
- `packages/config` & `packages/test-utils` & `packages/i18n`.
- Monorepo root workspace configuration (`package.json`, `turbo.json`, `tsconfig.base.json`).

## How to Push to Git:
1. Clone the GitHub repository or navigate to your local repo:
   ```bash
   git clone <REPO_URL>
   cd PairUp
   ```
2. Create and checkout your feature branch:
   ```bash
   git checkout -b feature/shared-core-packages
   ```
3. Copy all files from this zip into your repository folder.
4. Stage, commit, and push under your name:
   ```bash
   git add .
   git commit -m "feat(core): implement shared domain types, contracts, client SDKs and validation"
   git push -u origin feature/shared-core-packages
   ```
5. Open a Pull Request on GitHub from `feature/shared-core-packages` into `main` and merge it!
"""
        z.writestr("INSTRUCTIONS-PART1.md", instructions)
        count += 1

    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f" -> Completed: {count} files packaged ({size_mb:.2f} MB)")
    return out_path

# ==============================================================================
# PART 2: Backend Platform, API & Database Engine
# ==============================================================================
def package_part2():
    out_path = os.path.join(ROOT, "PairUp-Part2-BackendAPI.zip")
    print(f"\n[2/4] Building {os.path.basename(out_path)}...")
    count = 0
    with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as z:
        # Backend API
        count += add_dir_to_zip(z, os.path.join(ROOT, "apps", "api"), "apps/api")
        # Database & Prisma
        count += add_dir_to_zip(z, os.path.join(ROOT, "database"), "database")
        count += add_dir_to_zip(z, os.path.join(ROOT, "prisma"), "prisma")
        
        # Backend root helpers
        for f in ["nest-cli.json", "tsconfig.json", "tsconfig.build.json"]:
            fp = os.path.join(ROOT, f)
            if os.path.exists(fp):
                z.write(fp, f)
                count += 1
                
        instructions = """# PairUp — Part 2: Backend Platform & Database Engine
Assignee: Friend 2 (Backend & Database Lead)

## Contents
- `apps/api`: Full NestJS backend platform.
  - 60 Enterprise domain modules (entities, repositories, services, controllers, modules).
  - Core modules: auth, profiles, discovery, chat, WebRTC calls, voice rooms, safety, surge, subscriptions, admin.
  - Guards, filters, interceptors, and database service.
  - Vitest backend test suites (`apps/api/test/`).
- `database/`: SQL schemas, migrations, spatial PostGIS indices, seeds.
- `prisma/`: Prisma schema, migrations, and seed scripts.

## How to Push to Git:
1. Pull the latest `main` branch:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Create and switch to your feature branch:
   ```bash
   git checkout -b feature/backend-api-platform
   ```
3. Extract and copy the `apps/api`, `database`, and `prisma` folders into your repository.
4. Stage, commit, and push under your name:
   ```bash
   git add apps/api database prisma nest-cli.json
   git commit -m "feat(api): implement NestJS backend architecture, 60 enterprise services and database schemas"
   git push -u origin feature/backend-api-platform
   ```
5. Open a Pull Request on GitHub from `feature/backend-api-platform` into `main` and merge it!
"""
        z.writestr("INSTRUCTIONS-PART2.md", instructions)
        count += 1

    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f" -> Completed: {count} files packaged ({size_mb:.2f} MB)")
    return out_path

# ==============================================================================
# PART 3: Frontend Web Application & UI/UX
# ==============================================================================
def package_part3():
    out_path = os.path.join(ROOT, "PairUp-Part3-FrontendWeb.zip")
    print(f"\n[3/4] Building {os.path.basename(out_path)}...")
    count = 0
    with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as z:
        # Frontend Web
        count += add_dir_to_zip(z, os.path.join(ROOT, "apps", "web"), "apps/web")
        
        instructions = """# PairUp — Part 3: Frontend Web Application & UI/UX
Assignee: Friend 3 (Frontend & Design Lead)

## Contents
- `apps/web`: React 18, Vite & Tailwind CSS portal.
  - 60 Enterprise domain management dashboards (`apps/web/src/enterprise/`).
  - Swiping & matching candidate deck with compatibility vibe breakdown.
  - Real-time encrypted messaging interface with waveform voice notes.
  - In-person Date Guard check-in emergency drawer.
  - 4-step onboarding wizard (`/onboarding`).
  - Account settings, multi-device session manager, password change.
  - Admin moderation console and due process appeals interface.

## How to Push to Git:
1. Pull the latest `main` branch:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Create and switch to your feature branch:
   ```bash
   git checkout -b feature/frontend-web-ui
   ```
3. Extract and copy `apps/web` into your repository.
4. Stage, commit, and push under your name:
   ```bash
   git add apps/web
   git commit -m "feat(web): implement React 18 web application, 60 enterprise dashboards and UI components"
   git push -u origin feature/frontend-web-ui
   ```
5. Open a Pull Request on GitHub from `feature/frontend-web-ui` into `main` and merge it!
"""
        z.writestr("INSTRUCTIONS-PART3.md", instructions)
        count += 1

    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f" -> Completed: {count} files packaged ({size_mb:.2f} MB)")
    return out_path

# ==============================================================================
# PART 4: Mobile App, Worker, Tests & DevOps Infrastructure
# ==============================================================================
def package_part4():
    out_path = os.path.join(ROOT, "PairUp-Part4-MobileDevOps.zip")
    print(f"\n[4/4] Building {os.path.basename(out_path)}...")
    count = 0
    with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as z:
        # Mobile app
        count += add_dir_to_zip(z, os.path.join(ROOT, "apps", "mobile"), "apps/mobile")
        # Worker
        count += add_dir_to_zip(z, os.path.join(ROOT, "apps", "worker"), "apps/worker")
        # Root tests
        count += add_dir_to_zip(z, os.path.join(ROOT, "tests"), "tests")
        # Infrastructure, Docs & GitHub
        count += add_dir_to_zip(z, os.path.join(ROOT, "infrastructure"), "infrastructure")
        count += add_dir_to_zip(z, os.path.join(ROOT, ".github"), ".github")
        count += add_dir_to_zip(z, os.path.join(ROOT, "docs"), "docs")
        count += add_dir_to_zip(z, os.path.join(ROOT, "scripts"), "scripts")
        
        # Test configs & Docker
        test_infra_files = [
            "jest.config.js",
            "vitest.config.ts",
            "Dockerfile",
            "docker-compose.yml",
            "README.md"
        ]
        for tf in test_infra_files:
            fp = os.path.join(ROOT, tf)
            if os.path.exists(fp):
                z.write(fp, tf)
                count += 1
                
        instructions = """# PairUp — Part 4: Mobile Application, Background Worker, Tests & DevOps
Assignee: Friend 4 (Mobile & QA/DevOps Lead)

## Contents
- `apps/mobile`: React Native Expo mobile app with 60 enterprise mobile screens.
- `apps/worker`: Background queue consumer for scheduled safety watchdogs & cleanup.
- `tests/`: Root integration and unit test suites.
- `jest.config.js` & `vitest.config.ts`: Quality test runner configs.
- `Dockerfile` & `docker-compose.yml`: Multi-stage Docker containers and compose stack.
- `.github/`: CI/CD workflow pipelines.
- `README.md`: Complete 230-line documentation with Installation, Build, Run guides.

## How to Push to Git:
1. Pull the latest `main` branch:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Create and switch to your feature branch:
   ```bash
   git checkout -b feature/mobile-tests-devops
   ```
3. Extract and copy `apps/mobile`, `apps/worker`, `tests`, `infrastructure`, and config files into your repository.
4. Stage, commit, and push under your name:
   ```bash
   git add apps/mobile apps/worker tests jest.config.js vitest.config.ts Dockerfile docker-compose.yml README.md .github infrastructure scripts docs
   git commit -m "feat(mobile-qa): implement Expo mobile app, test suites, Docker infrastructure and documentation"
   git push -u origin feature/mobile-tests-devops
   ```
5. Open a Pull Request on GitHub from `feature/mobile-tests-devops` into `main` and merge it!
"""
        z.writestr("INSTRUCTIONS-PART4.md", instructions)
        count += 1

    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f" -> Completed: {count} files packaged ({size_mb:.2f} MB)")
    return out_path

def main():
    print("=" * 70)
    print("PairUp Modular Split: Creating 4 Distribution Zip Packages")
    print("=" * 70)
    p1 = package_part1()
    p2 = package_part2()
    p3 = package_part3()
    p4 = package_part4()
    print("\n" + "=" * 70)
    print("All 4 modular packages successfully created!")
    print(f"1. {p1}")
    print(f"2. {p2}")
    print(f"3. {p3}")
    print(f"4. {p4}")
    print("=" * 70)

if __name__ == '__main__':
    main()
