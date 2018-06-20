import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginScreenComponent } from './app-login-screen.component';

describe('AppLoginScreenComponent', () => {
  let component: AppLoginScreenComponent;
  let fixture: ComponentFixture<AppLoginScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoginScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
