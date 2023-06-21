import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpsMmidComponent } from './imps-mmid.component';

describe('ImpsMmidComponent', () => {
  let component: ImpsMmidComponent;
  let fixture: ComponentFixture<ImpsMmidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpsMmidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpsMmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
