import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsheaderComponent } from './chartsheader.component';

describe('ChartsheaderComponent', () => {
  let component: ChartsheaderComponent;
  let fixture: ComponentFixture<ChartsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
