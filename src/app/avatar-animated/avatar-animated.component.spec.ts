import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAnimatedComponent } from './avatar-animated.component';

describe('AvatarAnimatedComponent', () => {
  let component: AvatarAnimatedComponent;
  let fixture: ComponentFixture<AvatarAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarAnimatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
