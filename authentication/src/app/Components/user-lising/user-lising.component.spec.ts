import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLisingComponent } from './user-lising.component';

describe('UserLisingComponent', () => {
  let component: UserLisingComponent;
  let fixture: ComponentFixture<UserLisingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLisingComponent]
    });
    fixture = TestBed.createComponent(UserLisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
