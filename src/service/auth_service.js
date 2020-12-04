import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }
  logout() {
    firebaseAuth.signOut();
  }
  onAuthChanged(user) {
    firebaseAuth.onAuthStateChanged(user);
  }
  // onAuthChanged(change) {
  //   console.log(change);
  //   firebase.auth().onAuthStateChanged((user) => {
  //     change(user);
  //   });
  // }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
