import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiscComponent } from './maisc.component';

describe('MaiscComponent', () => {
  let component: MaiscComponent;
  let fixture: ComponentFixture<MaiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaiscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
