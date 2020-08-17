import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICompany } from 'src/app/model/company';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-company-change-dialog',
  templateUrl: './company-change-dialog.component.html',
  styleUrls: ['./company-change-dialog.component.scss']
})
export class CompanyChangeDialogComponent implements OnInit {
  company = new FormControl();
  options: ICompany[] = [];
  filteredOptions: Observable<ICompany[]>;
  form: FormGroup;
  title: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CompanyChangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { companies }: any) {
    this.title = "Change Company";

    this.form = fb.group({
    });
    this.options = companies;
  }

  ngOnInit(): void {
    this.filteredOptions = this.company.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): ICompany[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  save() {

    debugger;
    this.dialogRef.close({
      ...this.form.value,
      productGroupId: this.company.value
    });
  }

  close() {
    this.dialogRef.close();
  }

}
