import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyChangeDialogComponent } from './company-change-dialog.component';

describe('CompanyChangeDialogComponent', () => {
  let component: CompanyChangeDialogComponent;
  let fixture: ComponentFixture<CompanyChangeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyChangeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyChangeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
