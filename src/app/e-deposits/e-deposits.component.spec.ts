import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDepositsComponent } from './e-deposits.component';

describe('EDepositsComponent', () => {
  let component: EDepositsComponent;
  let fixture: ComponentFixture<EDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDepositsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
