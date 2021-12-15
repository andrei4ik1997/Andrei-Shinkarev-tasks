import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../../shared/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss','../../../../adaptiv.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  errorMessage: string;
  authFailedMessage: string;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/admin', 'dashboard']);
    }
    this.route.queryParams.subscribe((params: Params) => {
      if (params.authFailed) {
        this.authFailedMessage = 'Please log in';
      }
    });
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth.login(user).subscribe(
      (response) => {
        this.submitted = false;
        this.auth.setToken(response);
        this.form.reset();
        this.router.navigate(['/admin', 'dashboard']);
      },
      (error) => {
        const { message } = error.error.error;
        switch (message) {
          case 'INVALID_EMAIL':
            this.errorMessage = 'Invalid email';
            break;
          case 'EMAIL_NOT_FOUND':
            this.errorMessage = 'Email not found';
            break;
          case 'INVALID_PASSWORD':
            this.errorMessage = 'Invalid password';
            break;
        }
        this.submitted = false;
      }
    );
  }
}
