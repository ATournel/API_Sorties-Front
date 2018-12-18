import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListParamsComponent } from './tag-list-params.component';

describe('TagListParamsComponent', () => {
  let component: TagListParamsComponent;
  let fixture: ComponentFixture<TagListParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
