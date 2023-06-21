import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrematureClosureComponent } from './premature-closure.component';

describe('PrematureClosureComponent', () => {
  let component: PrematureClosureComponent;
  let fixture: ComponentFixture<PrematureClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrematureClosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrematureClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
