import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerAvatarComponent } from './streamer-avatar.component';

describe('StreamerAvatarComponent', () => {
  let component: StreamerAvatarComponent;
  let fixture: ComponentFixture<StreamerAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamerAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamerAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
