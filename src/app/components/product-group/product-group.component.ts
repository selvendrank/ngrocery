import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

export interface ProductGroup {
  masterID: number;
  masterName: string;
  shortname: string;
  companyId: number;
}
@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.scss']
})
export class ProductGroupComponent implements OnInit {

  productGroups: ProductGroup[];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = [];

  columnNames = [{
    id: 'masterID',
    value: 'Product Group Id.',

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
    this.apiService.getProductGroups(6).subscribe((productGroups: ProductGroup[]) => {
      console.log(productGroups)
      this.productGroups = productGroups;
    });
  }

}
