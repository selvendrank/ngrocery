import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { ProductSubGroup } from '../../model/product-sub-group'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ProductGroup } from '../product-group/product-group.component';

@Component({
  selector: 'app-product-sub-group-dialog',
  templateUrl: './product-sub-group-dialog.component.html',
  styleUrls: ['./product-sub-group-dialog.component.scss']
})
export class ProductSubGroupDialogComponent implements OnInit {
  productGroup = new FormControl();
  options: ProductGroup[] = [];
  filteredOptions: Observable<ProductGroup[]>;
  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductSubGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { masterName, shortname, productGroups }: ProductSubGroup) {

    this.title = "New Sub Group";

    this.form = fb.group({
      masterName: [masterName, Validators.required],
      shortname: [shortname, Validators.required]
    });
    this.options = productGroups;
  }
  ngOnInit(): void {
    this.filteredOptions = this.productGroup.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): ProductGroup[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.masterName.toLowerCase().includes(filterValue));
  }
  save() {

    debugger;
    this.dialogRef.close({
      ...this.form.value,
      productGroupId: this.productGroup.value
    });
  }

  close() {
    this.dialogRef.close();
  }
}
