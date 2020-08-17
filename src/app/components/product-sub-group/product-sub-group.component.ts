import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductSubGroupDataSource } from './product-sub-group-datasource'
import { ProductSubGroup } from '../../model/product-sub-group'
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ProductSubGroupDialogComponent } from '../product-sub-group-dialog/product-sub-group-dialog.component';
import { ProductGroup } from '../product-group/product-group.component';
// export interface ProductSubGroup {
//   masterID: number;
//   masterName: string;
//   shortname: string;
//   companyId: number;
// }

@Component({
  selector: 'app-product-sub-group',
  templateUrl: './product-sub-group.component.html',
  styleUrls: ['./product-sub-group.component.scss']
})
export class ProductSubGroupComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductSubGroup>;
  dataSource: ProductSubGroupDataSource;
  dataLength: number;
  displayedColumns = [
    "id",
    "name",
    "short"

  ];

  // productSubGroups: ProductSubGroup[];
  // displayedColumns: string[] = ['position', 'name', 'weight'];
  // dataSource = [];

  // columnNames = [{
  //   id: 'masterID',
  //   value: 'Product Group Id.',

  // }, {
  //   id: 'masterName',
  //   value: 'Name',
  // },
  // {
  //   id: 'shortname',
  //   value: 'Short Name',
  // }];

  constructor(private apiService: ApiService, private dialog: MatDialog) { }
  columns = [];
  ngOnInit(): void {
    this.dataSource = new ProductSubGroupDataSource(this.apiService);
    this.dataSource.loadProductSubGroups();
    this.dataLength = 15;
    // this.columns = this.columnNames.map(x => x.id);
    // this.apiService.getProductSubGroups().subscribe((productSubGroups: ProductSubGroup[]) => {
    //   this.productSubGroups = productSubGroups;
    // });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  edit() {

    this.apiService.getProductGroups(6).subscribe((productGroups: ProductGroup[]) => {

      this.openDialog(productGroups);
    });

  }
  public openDialog(productGroups: ProductGroup[]) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      masterName: "",
      shortname: "",
      productGroups: productGroups
    };

    const dialogRef = this.dialog.open(ProductSubGroupDialogComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      (val: ProductSubGroup) => {
        console.log("Dialog output:", val);
        this.apiService.SaveProductSubGroup(val);
      }

    );
  }
}
