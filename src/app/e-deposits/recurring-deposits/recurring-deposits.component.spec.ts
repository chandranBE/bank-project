import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositsComponent } from './recurring-deposits.component';

describe('RecurringDepositsComponent', () => {
  let component: RecurringDepositsComponent;
  let fixture: ComponentFixture<RecurringDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringDepositsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecurringDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
