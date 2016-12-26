/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommonListComponent } from './common-list.component';

describe('CommonListComponent', () => {
  let component: CommonListComponent;
  let fixture: ComponentFixture<CommonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
