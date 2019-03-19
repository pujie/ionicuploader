import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilechooserPage } from './filechooser.page';

describe('FilechooserPage', () => {
  let component: FilechooserPage;
  let fixture: ComponentFixture<FilechooserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilechooserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilechooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
