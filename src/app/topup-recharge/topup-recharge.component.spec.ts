import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupRechargeComponent } from './topup-recharge.component';

describe('TopupRechargeComponent', () => {
  let component: TopupRechargeComponent;
  let fixture: ComponentFixture<TopupRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupRechargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopupRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
