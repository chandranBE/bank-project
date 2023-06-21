import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSbiAccountsComponent } from './other-sbi-accounts.component';

describe('OtherSbiAccountsComponent', () => {
  let component: OtherSbiAccountsComponent;
  let fixture: ComponentFixture<OtherSbiAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSbiAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSbiAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
