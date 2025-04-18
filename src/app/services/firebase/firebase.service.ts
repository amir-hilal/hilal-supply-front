import { Injectable } from '@angular/core';
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { Auth, getAuth, signInWithCustomToken, UserCredential } from 'firebase/auth';
import { firebaseConfig } from '../../config/firebase/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
  private auth: Auth = getAuth(this.app);

  getApp(): FirebaseApp {
    return this.app;
  }

  getAuth(): Auth {
    return this.auth;
  }

  signInWithToken(token: string): Promise<UserCredential> {
    return signInWithCustomToken(this.auth, token);
  }
}
