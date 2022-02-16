import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByqD2waxOQRSbxNq9Bp1jmBE_ndwa2uCc",
  authDomain: "mundo-canino-d330b.firebaseapp.com",
  projectId: "mundo-canino-d330b",
  storageBucket: "mundo-canino-d330b.appspot.com",
  messagingSenderId: "467317031419",
  appId: "1:467317031419:web:7ec67e823e2e4f8a4e4b5e"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}