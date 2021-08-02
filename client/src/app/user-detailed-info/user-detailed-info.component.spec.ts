import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailedInfoComponent } from './user-detailed-info.component';

describe('UserDetailedInfoComponent', () => {
  let component: UserDetailedInfoComponent;
  let fixture: ComponentFixture<UserDetailedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
