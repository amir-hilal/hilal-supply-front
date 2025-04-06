import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { signInWithCustomToken } from 'firebase/auth';
import { firstValueFrom } from 'rxjs';
import { auth } from '../../services/utils/firebase/firebase';

@Component({
  selector: 'app-access',
  standalone: true,
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss',
})
export class AccessComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) {}

  async ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    if (!token) return;

    try {
      const response = await firstValueFrom(
        this.http.get<{ firebaseToken: string }>(
          `https://auth.hilalpines.com/api/auth/business-login?token=${token}`,
        ),
      );

      if (!response || !response.firebaseToken) {
        throw new Error('Invalid response from server');
      }

      const { firebaseToken } = response;
      await signInWithCustomToken(auth, firebaseToken);
      this.router.navigate(['/products']);
    } catch (err) {
      console.error('Login failed', err);
    }
  }
}
