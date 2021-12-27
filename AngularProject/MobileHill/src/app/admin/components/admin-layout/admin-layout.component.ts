import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss','../../../../adaptiv.scss'],
})
export class AdminLayoutComponent {
  constructor(public auth: AuthService, private router: Router) {}

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
