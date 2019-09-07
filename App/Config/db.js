import firebase from 'firebase';

let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

let app = firebase.initializeApp(config);

const db = app.database();
const storage = app.storage();

export { db, storage };