import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
  logout() {
    firebase.auth().signOut();
  }
  onAuthChanged(user) {
    firebase.auth().onAuthStateChanged(user);
  }
  // onAuthChanged(change) {
  //   console.log(change);
  //   firebase.auth().onAuthStateChanged((user) => {
  //     change(user);
  //   });
  // }
}

export default AuthService;
