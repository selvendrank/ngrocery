import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubGroupDialogComponent } from './product-sub-group-dialog.component';

describe('ProductSubGroupDialogComponent', () => {
  let component: ProductSubGroupDialogComponent;
  let fixture: ComponentFixture<ProductSubGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSubGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
