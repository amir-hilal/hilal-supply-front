import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { FirebaseService } from '../../services/firebase/firebase.service';

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

  async ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    if (!token) return;

    try {
      const response = await firstValueFrom(
        this.http.get<{ firebaseToken: string }>(
          `https://hilal-auth-service.vercel.app/api/auth/business-login?token=${token}`,
        ),
      );
      console.log(response);
      if (!response || !response.firebaseToken) {
        throw new Error('Invalid response from server');
      }

      const { firebaseToken } = response;
      await this.firebaseService.signInWithToken(firebaseToken);
      this.router.navigate(['/products']);
    } catch (err) {
      console.error('Login failed', err);
    }
  }
}
