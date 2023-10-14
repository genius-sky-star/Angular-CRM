import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendAnalyticsComponent } from './trend-analytics.component';

describe('TrendAnalyticsComponent', () => {
  let component: TrendAnalyticsComponent;
  let fixture: ComponentFixture<TrendAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
