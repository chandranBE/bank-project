import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMaturityInstructionComponent } from './change-maturity-instruction.component';

describe('ChangeMaturityInstructionComponent', () => {
  let component: ChangeMaturityInstructionComponent;
  let fixture: ComponentFixture<ChangeMaturityInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMaturityInstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeMaturityInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
