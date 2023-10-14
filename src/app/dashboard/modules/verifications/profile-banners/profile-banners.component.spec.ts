import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBannersComponent } from './profile-banners.component';

describe('ProfileBannersComponent', () => {
  let component: ProfileBannersComponent;
  let fixture: ComponentFixture<ProfileBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBannersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
