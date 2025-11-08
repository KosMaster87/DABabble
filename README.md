# 💬 DABubble

DABubble ist eine moderne Slack-ähnliche Kommunikationsplattform, entwickelt mit Angular und Firebase. Die Anwendung ermöglicht es Teams, über Channels und Direktnachrichten effizient zu kommunizieren.

## 🚀 Features

### Benutzeraccount & Administration

- ✅ Benutzerregistrierung und Login
- ✅ Passwort-Zurücksetzen Funktion
- ✅ Profilbearbeitung (Avatar & Name)
- ✅ Responsive Menüführung
- 🔄 Optional: Online-Status Anzeige

### Channels & Direktnachrichten

- 💬 Direktnachrichten zwischen Benutzern
- 📝 Channel-basierte Gruppenkommunikation
- 🧵 Thread-Unterstützung für Nachrichten
- 😊 Emoticon-Reaktionen auf Nachrichten
- 🔍 Nachrichtensuche
- 🏷️ @-Mentions und #-Channel-Tagging

### Channel Management

- ➕ Channels erstellen und bearbeiten
- 👥 Benutzer zu Channels einladen
- 🚪 Channels verlassen
- ✏️ Channel-Namen und -Beschreibungen editieren

## 🛠️ Tech Stack

- **Frontend:** Angular 20.3.0
- **Backend:** Firebase (Firestore, Authentication, Storage)
- **Styling:** SCSS
- **State Management:** RxJS
- **TypeScript:** 5.9.2

## 📋 Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn
- Angular CLI (`npm install -g @angular/cli`)
- Firebase Account

## 🏁 Installation & Setup

### 1. Repository klonen

```bash
git clone <repository-url>
cd dababble
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Firebase konfigurieren

1. Erstelle ein Firebase-Projekt auf [firebase.google.com](https://firebase.google.com)
2. Aktiviere folgende Services:
   - Authentication (Email/Password, optional: Google)
   - Firestore Database
   - Storage
3. Erstelle eine `src/environments/environment.ts` Datei:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  },
};
```

### 4. Development Server starten

```bash
npm start
# oder
ng serve
```

Die Anwendung läuft unter `http://localhost:4200/`

## 🏗️ Build

Für Production Build:

```bash
npm run build
```

Build-Artefakte werden im `dist/` Verzeichnis gespeichert.

## 🧪 Tests

Unit Tests ausführen:

```bash
npm test
```

## 📁 Projektstruktur

```
src/
├── app/
│   ├── components/         # Wiederverwendbare Komponenten
│   ├── pages/              # Seiten-Komponenten
│   ├── services/           # Services (Firebase, Auth, etc.)
│   ├── models/             # TypeScript Interfaces & Models
│   ├── guards/             # Route Guards
│   ├── pipes/              # Custom Pipes
│   └── shared/             # Shared Module & Komponenten
├── assets/
│   └── img/                # Bilder und Icons
├── environments/           # Environment Configs
└── styles.scss             # Globale Styles
```

## 👥 Team & Workflow

### Git Workflow

1. **Main Branch:** Stabiler Production-Code
2. **Dev Branch:** Development Branch für Integration
3. **Feature Branches:** `feature/feature-name` für neue Features
4. **Bugfix Branches:** `bugfix/bug-description` für Bugfixes

### Branch Naming Convention

```
feature/user-authentication
feature/channel-management
feature/direct-messages
bugfix/login-validation
hotfix/critical-bug
```

## 🤝 Contributing

1. Feature Branch erstellen: `git checkout -b feature/amazing-feature`
2. Änderungen committen: `git commit -m 'feat: Add amazing feature'`
3. Branch pushen: `git push origin feature/amazing-feature`
4. Pull Request erstellen

## 📜 License

Dieses Projekt ist Teil einer Bildungsinitiative.

## 📞 Support

Bei Fragen oder Problemen erstelle ein Issue im GitHub Repository.

---

**Entwickelt mit ❤️ von [Team Name]**
