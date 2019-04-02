import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  model: any = {};
  canRegister: boolean = true;
  matchError: boolean = false;

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.invalid) return;
    if (this.model.Password !== this.model.Password2) this.matchError = true;
    this.matchError = false;
    this.canRegister = false;
  }
}
