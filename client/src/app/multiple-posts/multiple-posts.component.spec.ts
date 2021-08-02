import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePostsComponent } from './multiple-posts.component';

describe('MultiplePostsComponent', () => {
  let component: MultiplePostsComponent;
  let fixture: ComponentFixture<MultiplePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
