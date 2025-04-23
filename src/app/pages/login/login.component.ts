import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { loginSuccess, logout } from '../../store/auth/auth.index';
import { setError } from '../../store/error/error.index';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private router = inject(Router);
  private firebaseService = inject(FirebaseService);
  private store = inject(Store);

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      const uid = result.user.uid;

      const adminEmails = await this.firebaseService.getAdminEmails();
      if (email && adminEmails.includes(email)) {
        this.store.dispatch(loginSuccess({ uid, email, role: 'admin' }));
        this.router.navigate(['/admin/dashboard']);
      } else {
        await auth.signOut();
        this.store.dispatch(logout());
        alert('You are not authorized to access the admin panel.');
      }
    } catch (error: any) {
      this.store.dispatch(
        setError({ message: 'Google login failed. Please check your connection.' }),
      );
      console.error('Login failed:', error);
    }
  }
}
