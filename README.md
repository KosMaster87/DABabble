# 💬 DABubble

A modern Slack-like communication platform built with Angular and Firebase.

## 🚀 Features

- 💬 Direct messages between users
- 📝 Channel-based group communication
- 🧵 Thread support for messages
- 😊 Emoji reactions
- 🔍 Message search
- 👤 User registration and login
- 📎 File uploads (images, documents)

## 🛠️ Tech Stack

- **Frontend:** Angular 20.3.0
- **State Management:** NgRx SignalStore
- **Backend:** Firebase (Firestore, Authentication, Storage)
- **Styling:** SCSS
- **TypeScript:** 5.9.2

## 📋 Prerequisites

- Node.js (Version 18+)
- Angular CLI (`npm install -g @angular/cli`)
- Firebase Account

## 🏁 Installation

```bash
# Clone repository
git clone <repository-url>
cd dababble

# Install dependencies
npm install

# Start development server
npm start
```

Application runs at `http://localhost:4200/`

## ⚙️ Firebase Configuration

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication, Firestore, and Storage
3. Copy `src/environments/environment.example.ts` to `environment.ts`
4. Add your Firebase configuration

## 📁 Project Structure

```
src/app/
├── components/         # UI Components
├── pages/              # Pages
├── stores/             # NgRx SignalStores
├── services/           # Services
├── models/             # TypeScript Models
└── guards/             # Route Guards
```

## 🏗️ Build & Test

```bash
# Production build
npm run build

# Unit tests
npm test
```

## 📖 Store Architecture

This project uses **NgRx SignalStore** for state management:

- `AuthStore` - Authentication
- `UserStore` - User Management
- `ChannelStore` - Channel CRUD
- `MessageStore` - Message Operations
- More specialized stores...

**Best Practice:**

```typescript
// In Components: Direct Inject
private authStore = inject(AuthStore);

// In Services with many stores: useStores()
private stores = useStores();
```

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/new-feature`
2. Commit changes: `git commit -m 'feat: Add feature'`
3. Create Pull Request

## 📜 Coding Guidelines

See `.github/copilot-instructions.md` for detailed coding standards:

- Functions max. 14 lines
- Files max. 400 lines
- Complete JSDoc documentation (English)
- Use `inject()` instead of Constructor Injection

---

**Built with ❤️ by the DABubble Team**
