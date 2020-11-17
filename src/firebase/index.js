import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp ({
    apiKey: process.env.REACT_APP_FS_API_KEY,
    authDomain: process.env.REACT_APP_FS_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FS_DATABASE_UR,
    projectId: process.env.REACT_APP_FS_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FS_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FS_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FS_APP_ID
});

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}

// Export other firebase integrations
