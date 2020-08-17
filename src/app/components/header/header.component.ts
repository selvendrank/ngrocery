import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService } from '../../services/nav-service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //@Output() public sidenavToggle = new EventEmitter();
  @Output() toggle = new EventEmitter<boolean>();
  isAuthenticated: boolean;
  isExpanded = true;

  constructor(
    public navService: NavService,
    public authService: AuthService
  ) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout('/');
  }
  public onToggleSidenav = () => {
    // this.sidenavToggle.emit();
    this.toggle.emit(true);

  }

}
