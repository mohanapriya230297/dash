import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsfooterComponent } from './chartsfooter.component';

describe('ChartsfooterComponent', () => {
  let component: ChartsfooterComponent;
  let fixture: ComponentFixture<ChartsfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
