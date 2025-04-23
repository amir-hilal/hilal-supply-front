import { inject, Injectable } from '@angular/core';
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { Auth, getAuth, signInWithCustomToken, UserCredential } from 'firebase/auth';
import { fetchAndActivate, getRemoteConfig, getValue, RemoteConfig } from 'firebase/remote-config';
import { firebaseConfig } from '../../config/firebase/firebase.config';
import { Store } from '@ngrx/store';
import { setError } from '../../store/error/error.index';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
  private auth: Auth = getAuth(this.app);
  private remoteConfig: RemoteConfig = getRemoteConfig(this.app);
  private store = inject(Store);

  constructor() {
    this.remoteConfig.settings = {
      minimumFetchIntervalMillis: 3600000, // fetch every hour
      fetchTimeoutMillis: 60000, // set fetch timeout to 1 minute
    };
  }

  getApp(): FirebaseApp {
    return this.app;
  }

  getAuth(): Auth {
    return this.auth;
  }

  signInWithToken(token: string): Promise<UserCredential> {
    return signInWithCustomToken(this.auth, token);
  }

  async getAdminEmails(): Promise<string[]> {
    try {
      await fetchAndActivate(this.remoteConfig);
      const jsonStr = getValue(this.remoteConfig, 'admin').asString();
      return JSON.parse(jsonStr) as string[];
    } catch (err) {
      this.store.dispatch(setError({ message: 'Something wrong happened.' }));
      return [];
    }
  }

}
