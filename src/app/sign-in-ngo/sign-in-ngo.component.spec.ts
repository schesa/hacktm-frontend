import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInNgoComponent } from './sign-in-ngo.component';

describe('SignInNgoComponent', () => {
  let component: SignInNgoComponent;
  let fixture: ComponentFixture<SignInNgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInNgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
