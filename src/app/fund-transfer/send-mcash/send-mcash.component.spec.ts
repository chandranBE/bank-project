import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMcashComponent } from './send-mcash.component';

describe('SendMcashComponent', () => {
  let component: SendMcashComponent;
  let fixture: ComponentFixture<SendMcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMcashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
