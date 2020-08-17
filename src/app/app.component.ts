import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../app/services/auth.service';

import { NavService } from '../app/services/nav-service'
export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  title = 'Niral Grocery';
  isExpanded = true;
  isAuthenticated: boolean;

  constructor(
    private navService: NavService,
    public authService: AuthService) {
      this.authService.isAuthenticated.subscribe(
        (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
      );
  }
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
  async ngOnInit() {
    this.isAuthenticated = await this.authService.checkAuthenticated();
  }
  logout() {
    this.authService.logout('/');
  }
  onToggle(expanded: boolean) {
    debugger;
    this.isExpanded = !this.isExpanded;
  }
}
