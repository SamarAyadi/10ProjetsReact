import firebase from 'firebase/app'
import 'firebase/auth'


const app = firebase.initializeApp({
        apiKey: "AIzaSyDgIERwemhE52sGF2vL_n37rcDI3O2-IkI",
        authDomain: "auth-react-cours.firebaseapp.com",
        projectId: "auth-react-cours",
        storageBucket: "auth-react-cours.appspot.com",
        messagingSenderId: "257365078403",
        appId: "1:257365078403:web:e7ebe10f3aedd3d6ecc6b6"
})

export const auth = app.auth();
export default app;