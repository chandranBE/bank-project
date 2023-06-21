import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiOptionalDepositsComponent } from './multi-optional-deposits.component';

describe('MultiOptionalDepositsComponent', () => {
  let component: MultiOptionalDepositsComponent;
  let fixture: ComponentFixture<MultiOptionalDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiOptionalDepositsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiOptionalDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
