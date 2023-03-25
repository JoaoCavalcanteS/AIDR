import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifEx1Component } from './ngif-ex1.component';

describe('NgifEx1Component', () => {
  let component: NgifEx1Component;
  let fixture: ComponentFixture<NgifEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifEx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
