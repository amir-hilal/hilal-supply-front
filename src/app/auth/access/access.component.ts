import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { loginSuccess } from '../../store/auth/auth.index';
import { setError } from '../../store/error/error.index';

@Component({
  selector: 'app-access',
  standalone: true,
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss',
})
export class AccessComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private router = inject(Router);
  private firebaseService = inject(FirebaseService);
  private store = inject(Store);

  async ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    if (!token) return;

    try {
      const response = await firstValueFrom(
        this.http.get<{ firebaseToken: string }>(
          `https://hilal-auth-service.vercel.app/api/auth/business-login?token=${token}`,
        ),
      );
      if (!response || !response.firebaseToken) {
        throw new Error('Invalid response from server');
      }

      const { firebaseToken } = response;
      await this.firebaseService.signInWithToken(firebaseToken);
      const user = this.firebaseService.getAuth().currentUser;
      if (user) {
        this.store.dispatch(
          loginSuccess({ uid: user.uid, email: user.email ?? '', role: 'business' }),
        );
      }

      this.router.navigate(['/products']);
    } catch (err: any) {
      this.store.dispatch(
        setError({ message: 'Login failed. Please check the access link or connection.' }),
      );
      console.error('Login failed', err);
    }
  }
}
