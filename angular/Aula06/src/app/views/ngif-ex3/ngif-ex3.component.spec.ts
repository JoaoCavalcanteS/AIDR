import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifEx3Component } from './ngif-ex3.component';

describe('NgifEx3Component', () => {
  let component: NgifEx3Component;
  let fixture: ComponentFixture<NgifEx3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifEx3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifEx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
