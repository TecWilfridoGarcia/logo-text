import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
        apiKey: "AIzaSyDFkk4AnkVtJR1UGvL2TdIh5U89YidofZc",
        authDomain: "test-api-6a139.firebaseapp.com",
        databaseURL: "https://test-api-6a139.firebaseio.com",
        projectId: "test-api-6a139",
        storageBucket: "test-api-6a139.appspot.com",
        messagingSenderId: "990274017464",
    
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;