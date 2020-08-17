import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './components/header/header.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { NavService } from '../app/services/nav-service';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { ProductSubGroupComponent } from './components/product-sub-group/product-sub-group.component';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CardComponent } from './card/card.component';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './charts/store-sessions-chart/store-sessions-chart.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { ProductSubGroupDialogComponent } from './components/product-sub-group-dialog/product-sub-group-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { CompanyChangeDialogComponent } from './components/company-change-dialog/company-change-dialog.component';
import { UserLoginComponent } from './components/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    ProductsComponent,
    HeaderComponent,
    NavigationComponent,
    ProductGroupComponent,
    ProductSubGroupComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    OrdersTableComponent,
    MiniCardComponent,
    ProductSubGroupDialogComponent,
    LoginComponent,
    UserComponent,
    CompanyChangeDialogComponent,
    UserLoginComponent
  ],
  imports: [
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule

  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
