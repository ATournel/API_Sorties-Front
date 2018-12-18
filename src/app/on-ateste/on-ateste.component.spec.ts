import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnATesteComponent } from './on-ateste.component';

describe('OnATesteComponent', () => {
  let component: OnATesteComponent;
  let fixture: ComponentFixture<OnATesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnATesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnATesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
