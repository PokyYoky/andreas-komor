import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSwitchComponent } from './skill-switch.component';

describe('SkillSwitchComponent', () => {
  let component: SkillSwitchComponent;
  let fixture: ComponentFixture<SkillSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
