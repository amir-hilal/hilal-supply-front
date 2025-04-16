import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login-layout',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class LoginLayoutComponent {}
