import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteByTagsComponent } from './activite-by-tags.component';

describe('ActiviteByTagsComponent', () => {
  let component: ActiviteByTagsComponent;
  let fixture: ComponentFixture<ActiviteByTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteByTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteByTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
