import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User;
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
    return this.afAuth.authState.pipe(first()).toPromise;
  }
}
