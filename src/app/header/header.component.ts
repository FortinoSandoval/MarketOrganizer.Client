import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {
    this.authService.setLoggedinMethod.subscribe(
      () => {
        this.isLoggedIn = true;
      }
    );
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }

}
