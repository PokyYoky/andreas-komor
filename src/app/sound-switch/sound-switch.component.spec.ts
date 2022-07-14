import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSwitchComponent } from './sound-switch.component';

describe('SoundSwitchComponent', () => {
  let component: SoundSwitchComponent;
  let fixture: ComponentFixture<SoundSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
