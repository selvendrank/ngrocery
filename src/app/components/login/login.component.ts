import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    public authService: AuthService) { }
  showSpinner: boolean;
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    this.showSpinner = true;
    this.authService.login(this.username,this.password);
    
    // if (this.username == 'admin' && this.password == 'admin') {
    //   this.router.navigate(["dashboard"]);
    // } else {
    //   alert("Invalid credentials");

    // }
    this.showSpinner = false;
  }
}


