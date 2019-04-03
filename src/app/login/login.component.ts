import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  model: any = {};
  canLogin = true;
  invalidCredentials = false;

  ngOnInit() {
    this.authService.logout();
  }

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
        () => {
          this.canLogin = true;
          this.model = {};
          this.router.navigateByUrl('/items');
          this.authService.loggedIn();
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
