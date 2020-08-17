import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from '../model/menu-item';
import { ApiService } from '../services/api.service';
import { ICompany } from '../model/company'
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CompanyChangeDialogComponent } from '../components/company-change-dialog/company-change-dialog.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems: MenuItem[] = [
    { name: 'Dashboard', link: 'dashboard' },
    { name: 'Products', link: 'products' },
    { name: 'Product Group', link: 'groups' },
    { name: 'Product Sub Group', link: 'subgroups' },
  ];
  //menuItems = ['dashboard', 'products', 'groups', 'product sub group', 'products'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apiService: ApiService,
    private dialog: MatDialog) {

  }

  changeCompany() {

    this.apiService.getCompanies().subscribe((companies: ICompany[]) => {

      this.openDialog(companies);
    });

  }
  public openDialog(companies: ICompany[]) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      companies: companies
    };

    const dialogRef = this.dialog.open(CompanyChangeDialogComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      (val: ICompany) => {
        console.log("Dialog output:", val);

      }

    );
  }
}
