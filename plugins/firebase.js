import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAkpbFV1rPQKfeko9pjWJjLSZorTUq1HOs',
    authDomain: 'nuxt-firebase-test-bba49.firebaseapp.com',
    databaseURL: 'https://nuxt-firebase-test-bba49.firebaseio.com',
    projectId: 'nuxt-firebase-test-bba49',
    storageBucket: 'nuxt-firebase-test-bba49.appspot.com',
    messagingSenderId: '358644768924',
    appId: '1:358644768924:web:7b9c8583b0fe0a98dccd59',
  })
}
export default firebase
