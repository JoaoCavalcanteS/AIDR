import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifEx05Component } from './ngif-ex05.component';

describe('NgifEx05Component', () => {
  let component: NgifEx05Component;
  let fixture: ComponentFixture<NgifEx05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifEx05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifEx05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
