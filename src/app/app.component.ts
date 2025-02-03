import {
  Component,
  computed,
  HostListener,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'hilal-supply-front';

  isMobile = signal(true); // Default to true in SSR

  // isLoggedIn = computed(() => this.authService.isLoggedIn());
  isLoggedIn = computed(() => true);

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isMobile.set(window.innerWidth <= 700);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (typeof window !== 'undefined') {
      this.isMobile.set(event.target.innerWidth <= 700);
    }
  }

  prepareRoute(outlet: RouterOutlet): string | undefined {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
