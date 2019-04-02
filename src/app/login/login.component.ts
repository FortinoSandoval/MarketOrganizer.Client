import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor() { }
  model: any = {};
  canLogin: boolean = true;

  ngOnInit() {
  }

  onSubmit(form) {
    this.canLogin = false;
  }

}
