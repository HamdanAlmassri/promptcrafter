// 🔹 Firebase Initialization for GitHub Pages
// Include these scripts in every HTML page BEFORE this file:
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
// Then include: <script src="./firebase-init.js"></script>

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDq38TpBK04RkbR6ndfgVqbwVWahNItTkg",
  authDomain: "promptcrafter-de996.firebaseapp.com",
  projectId: "promptcrafter-de996",
  storageBucket: "promptcrafter-de996.firebasestorage.app",
  messagingSenderId: "267733302859",
  appId: "1:267733302859:web:dbf8c54d153b24b97c17ce",
  measurementId: "G-8VY630JXNM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make Firebase services globally available
window.auth = firebase.auth();
window.db = firebase.firestore();
