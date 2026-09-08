# Firebase setup

1. Create a Firebase project and register a Web app.
2. Enable Email/Password Authentication, then create the admin user using the email configured in `VUE_APP_FIREBASE_ADMIN_EMAIL`.
3. Create a Firestore database and Storage bucket.
4. Copy `.env.example` to `.env` and fill in the Firebase Web app configuration from Project settings.
5. Deploy `firestore.rules` and `storage.rules` in the Firebase console or with the Firebase CLI.

The app stores portfolio metadata in the `portfolio` collection, contact submissions in `inquiries`, portfolio files under `portfolio/{documentId}/`, and inquiry videos under `inquiries/`.