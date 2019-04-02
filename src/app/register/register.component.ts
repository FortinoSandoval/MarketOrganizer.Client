import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  model: any = {};
  canRegister: boolean = true;
  matchError: boolean = false;
  alreadyExist: boolean = false;

  ngOnInit() {}

  onSubmit(form) {
    if (form.invalid) return;
    if (this.model.Password !== this.model.Password2) this.matchError = true;
    this.matchError = false;
    this.canRegister = false;
    console.log('aqui');
    this.authService.register(this.model).subscribe(
      () => {
        this.canRegister = true;
        this.model = {};
        this.router.navigateByUrl('/login');
      },
      ({ error }) => {
        if (error === 'User already exist') this.alreadyExist = true;
      }
    );
  }
}
