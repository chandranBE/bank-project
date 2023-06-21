import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPassbookComponent } from './m-passbook.component';

describe('MPassbookComponent', () => {
  let component: MPassbookComponent;
  let fixture: ComponentFixture<MPassbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPassbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
