# Development Configuration Guide

## Current Setup
- **Backend services**: Firebase (no local backend or proxy)
- **Frontend (Vue)**: Port 8080, or the next available port

## Firebase configuration

Copy `.env.example` to `.env` and add the Firebase Web app values from Project settings:

```bash
VUE_APP_FIREBASE_API_KEY=...
VUE_APP_FIREBASE_AUTH_DOMAIN=...
VUE_APP_FIREBASE_PROJECT_ID=...
VUE_APP_FIREBASE_STORAGE_BUCKET=...
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=...
VUE_APP_FIREBASE_APP_ID=...
VUE_APP_FIREBASE_ADMIN_EMAIL=admin@example.com
```

Restart the Vue dev server after changing environment values:
```bash
npm run serve
```

## Port Auto-Detection

✅ **Vue Dev Server**: Automatically finds next available port if 8080 is busy
## Access Your App

Always access through the Vue dev server URL shown in terminal:
```
App running at:
  - Local:   http://localhost:8081/  <-- Use this URL
```

Firebase errors usually mean one of the environment values is missing or the Firebase Authentication, Firestore, or Storage service has not been enabled. See `FIREBASE_SETUP.md`.
