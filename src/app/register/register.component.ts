import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  item: User = {};
  canRegister = true;
  matchError = false;
  alreadyExist = false;

  ngOnInit() {}

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    if (this.item.Password !== this.item.Password2) {
      this.matchError = true;
    }
    this.matchError = false;
    this.canRegister = false;
    this.authService.register(this.item).subscribe(
      () => {
        this.canRegister = true;
        this.item = {};
        this.router.navigateByUrl('/login');
      },
      ({ error }) => {
        if (error === 'User already exist') {
          this.canRegister = true;
          this.alreadyExist = true;
        }
      }
    );
  }
}
