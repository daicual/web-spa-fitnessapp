import { Injectable } from '@angular/core';
import { first, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}
  async inicio(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async registro(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
  getCurrentuser() {
    //return firebase.auth().currentUser;
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  async getUserIDAsync() {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
    console.log(user);
    console.log('UID: ', user.uid);
    return user.uid;
  }
}
