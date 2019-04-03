import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  model: any = {};
  canLogin = true;
  invalidCredentials = false;

  ngOnInit() {}

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    this.invalidCredentials = false;
    this.canLogin = false;
    this.authService
      .login(this.model)
      .pipe(first())
      .subscribe(
        ({ token }) => {
          this.canLogin = true;
          this.model = {};
        },
        ({ error }) => {
          if (error === 'Invalid Username/Password') {
            this.canLogin = true;
            this.invalidCredentials = true;
          }
        }
      );
  }
}
