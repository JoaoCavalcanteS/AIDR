import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifEx2Component } from './ngif-ex2.component';

describe('NgifEx2Component', () => {
  let component: NgifEx2Component;
  let fixture: ComponentFixture<NgifEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifEx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
