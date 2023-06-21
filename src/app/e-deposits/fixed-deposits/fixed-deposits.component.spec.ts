import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositsComponent } from './fixed-deposits.component';

describe('FixedDepositsComponent', () => {
  let component: FixedDepositsComponent;
  let fixture: ComponentFixture<FixedDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedDepositsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
