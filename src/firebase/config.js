// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpIDfD7obZjPtqhXk-KW7ybMebuoR2k6c",
    authDomain: "las-delicias-de-maria-cecilia.firebaseapp.com",
    projectId: "las-delicias-de-maria-cecilia",
    storageBucket: "las-delicias-de-maria-cecilia.appspot.com",
    messagingSenderId: "438633293919",
    appId: "1:438633293919:web:3318dd78058bee9a91d3ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}