import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSwitchComponent } from './menu-switch.component';

describe('MenuSwitchComponent', () => {
  let component: MenuSwitchComponent;
  let fixture: ComponentFixture<MenuSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
