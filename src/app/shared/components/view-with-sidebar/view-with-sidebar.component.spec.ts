import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWithSidebarComponent } from './view-with-sidebar.component';

describe('ViewWithSidebarComponent', () => {
  let component: ViewWithSidebarComponent;
  let fixture: ComponentFixture<ViewWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWithSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
