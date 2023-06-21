import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDepositEnquiryComponent } from './e-deposit-enquiry.component';

describe('EDepositEnquiryComponent', () => {
  let component: EDepositEnquiryComponent;
  let fixture: ComponentFixture<EDepositEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDepositEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDepositEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
