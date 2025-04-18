import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private router = inject(Router);
  private firebaseService = inject(FirebaseService);

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      const adminEmails = await this.firebaseService.getAdminEmails();
      if (email && adminEmails.includes(email)) {
        this.router.navigate(['/admin/dashboard']);
      } else {
        await auth.signOut();
        alert('You are not authorized to access the admin panel.');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
}
