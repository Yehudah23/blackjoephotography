import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes
} from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuBx5rER7jm9wWOaDdgc2q3DeVe8TqPL0",
  authDomain: "royalsandnobles-546e7.firebaseapp.com",
  projectId: "royalsandnobles-546e7",
  storageBucket: "royalsandnobles-546e7.firebasestorage.app",
  messagingSenderId: "754069665291",
  appId: "1:754069665291:web:8f5256b748ad99b491790e",
  measurementId: "G-FMZMKM22QG"
};

const firebaseConfigured = Object.values(firebaseConfig).every(Boolean);
const firebaseApp = firebaseConfigured ? initializeApp(firebaseConfig) : null;
const auth = firebaseApp ? getAuth(firebaseApp) : null;
const db = firebaseApp ? getFirestore(firebaseApp) : null;
const storage = firebaseApp ? getStorage(firebaseApp) : null;

function requireFirebase() {
  if (!firebaseConfigured) {
    throw new Error('Firebase is not configured. Copy .env.example to .env and add the Firebase Web app values.');
  }
}

function currentUser() {
  return auth ? auth.currentUser : null;
}

export function watchAuth(callback) {
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

export async function login(password) {
  requireFirebase();
  const email = process.env.VUE_APP_FIREBASE_ADMIN_EMAIL || 'judahk065@gmail.com';
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return auth ? signOut(auth) : Promise.resolve();
}

export async function getPortfolio() {
  requireFirebase();
  const snapshot = await getDocs(query(collection(db, 'portfolio'), orderBy('createdAt', 'desc')));
  return snapshot.docs.map(item => ({ id: item.id, ...item.data() }));
}

export async function uploadPortfolio(file, metadata) {
  requireFirebase();
  const itemRef = await addDoc(collection(db, 'portfolio'), {
    ...metadata,
    createdAt: serverTimestamp()
  });

  try {
    const fileRef = ref(storage, `portfolio/${itemRef.id}/${file.name}`);
    const upload = await uploadBytes(fileRef, file, { contentType: file.type });
    const url = await getDownloadURL(upload.ref);
    const mediaField = file.type.startsWith('video/') ? 'videoUrl' : 'imageUrl';
    await updateDoc(itemRef, { [mediaField]: url, storagePath: upload.ref.fullPath });
    return { id: itemRef.id, [mediaField]: url };
  } catch (error) {
    await deleteDoc(itemRef);
    throw error;
  }
}

export function updatePortfolio(id, payload) {
  requireFirebase();
  return updateDoc(doc(db, 'portfolio', id), payload);
}

export async function deletePortfolio(id, storagePath) {
  requireFirebase();
  if (storagePath) {
    await deleteObject(ref(storage, storagePath)).catch(error => {
      if (error.code !== 'storage/object-not-found') throw error;
    });
  }
  return deleteDoc(doc(db, 'portfolio', id));
}

export async function submitInquiry(formData) {
  requireFirebase();
  let videoUrl = '';
  let videoStoragePath = '';

  if (formData.video) {
    const videoRef = ref(storage, `inquiries/${Date.now()}-${formData.video.name}`);
    const upload = await uploadBytes(videoRef, formData.video, { contentType: formData.video.type });
    videoUrl = await getDownloadURL(upload.ref);
    videoStoragePath = upload.ref.fullPath;
  }

  return addDoc(collection(db, 'inquiries'), {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || '',
    service: formData.service,
    date: formData.date || '',
    message: formData.message || '',
    videoUrl,
    videoStoragePath,
    createdAt: serverTimestamp()
  });
}

export { auth, currentUser };
