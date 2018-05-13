import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInVolunteerComponent } from './sign-in-volunteer.component';

describe('SignInVolunteerComponent', () => {
  let component: SignInVolunteerComponent;
  let fixture: ComponentFixture<SignInVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
