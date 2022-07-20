import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarStaticComponent } from './avatar-static.component';

describe('AvatarStaticComponent', () => {
  let component: AvatarStaticComponent;
  let fixture: ComponentFixture<AvatarStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
