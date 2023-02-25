import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenomeComponent } from './sobrenome.component';

describe('SobrenomeComponent', () => {
  let component: SobrenomeComponent;
  let fixture: ComponentFixture<SobrenomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrenomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobrenomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
