import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD0WZRlkoBkf-J3WzG16_kP7L97nK13Gtg",
    authDomain: "todoapp-8a179.firebaseapp.com",
    projectId: "todoapp-8a179",
    storageBucket: "todoapp-8a179.appspot.com",
    messagingSenderId: "496429783512",
    appId: "1:496429783512:web:8a2b2ff7dae735bb6fbaad"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export{db};