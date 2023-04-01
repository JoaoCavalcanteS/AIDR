import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifEx04Component } from './ngif-ex04.component';

describe('NgifEx04Component', () => {
  let component: NgifEx04Component;
  let fixture: ComponentFixture<NgifEx04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifEx04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifEx04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
