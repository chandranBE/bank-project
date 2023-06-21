import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBankAccountsComponent } from './other-bank-accounts.component';

describe('OtherBankAccountsComponent', () => {
  let component: OtherBankAccountsComponent;
  let fixture: ComponentFixture<OtherBankAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherBankAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherBankAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
