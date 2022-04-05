import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFoodComponent } from './alert-food.component';

describe('AlertFoodComponent', () => {
  let component: AlertFoodComponent;
  let fixture: ComponentFixture<AlertFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
