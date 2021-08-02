import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTasksComponent } from './multiple-tasks.component';

describe('MultipleTasksComponent', () => {
  let component: MultipleTasksComponent;
  let fixture: ComponentFixture<MultipleTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
