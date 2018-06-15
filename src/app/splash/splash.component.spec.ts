<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SplashComponent } from "./splash.component";

describe("SplashComponent", () => {
  let component: SplashComponent;
  let fixture: ComponentFixture<SplashComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SplashComponent]
      }).compileComponents();
    })
  );
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashComponent } from './splash.component';

describe('SplashComponent', () => {
  let component: SplashComponent;
  let fixture: ComponentFixture<SplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashComponent ]
    })
    .compileComponents();
  }));
>>>>>>> feat/letsee

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  it("should create", () => {
=======
  it('should create', () => {
>>>>>>> feat/letsee
    expect(component).toBeTruthy();
  });
});
