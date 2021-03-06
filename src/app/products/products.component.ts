import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

export interface Product {
  masterID: number;
  masterName: string;
  shortname: string;
  companyId: number;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  columnNames = [{
    id: 'masterID',
    value: 'Product Id.',

  }, {
    id: 'masterName',
    value: 'Name',
  },
    {
      id: 'shortname',
      value: 'Short Name',
    }];

  constructor(private apiService: ApiService) { }
  columns=[];
  ngOnInit(): void {
    this.columns = this.columnNames.map(x => x.id);
    this.apiService.getProducts().subscribe((products: Product[]) => {
      console.log(products)
      this.products = products;
    });
  }

}
