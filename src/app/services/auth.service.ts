import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { IUser } from '../model/user';
//import OktaAuth from '@okta/okta-auth-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private authClient = new OktaAuth({
  //   issuer: 'https://{YourOktaDomain}/oauth2/default',
  //   clientId: '{ClientId}'
  // });

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private authClient: ApiService) {
  }

  async checkAuthenticated() {
    const authenticated = this.isTokenExists();// await this.authClient.session.exists();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  public isTokenExists(): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    return false;
  }
  async login(username: string, password: string) {

    this.authClient.login(username, password).subscribe((user: IUser) => {

      if (user.status !== 'SUCCESS') {
        throw Error('We cannot handle the ' + user.status + ' status');
      }
      localStorage.setItem('access_token', user.token);
      this.isAuthenticated.next(true);
      this.router.navigate(['/dashboard']);
    });


    //this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
  }

  async logout(redirect: string) {
    try {
      localStorage.removeItem('access_token');
      // await this.authClient.signOut();
      this.isAuthenticated.next(false);
      this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}