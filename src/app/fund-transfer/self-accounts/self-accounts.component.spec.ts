import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAccountsComponent } from './self-accounts.component';

describe('SelfAccountsComponent', () => {
  let component: SelfAccountsComponent;
  let fixture: ComponentFixture<SelfAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
