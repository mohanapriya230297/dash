import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartssidebarComponent } from './chartssidebar.component';

describe('ChartssidebarComponent', () => {
  let component: ChartssidebarComponent;
  let fixture: ComponentFixture<ChartssidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartssidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartssidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
