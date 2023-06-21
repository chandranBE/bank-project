import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManageBeneficiaryComponent } from './add-manage-beneficiary.component';

describe('AddManageBeneficiaryComponent', () => {
  let component: AddManageBeneficiaryComponent;
  let fixture: ComponentFixture<AddManageBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddManageBeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddManageBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
