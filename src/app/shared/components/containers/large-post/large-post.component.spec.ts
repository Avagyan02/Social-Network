import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargePostComponent } from './large-post.component';

describe('LargePostComponent', () => {
  let component: LargePostComponent;
  let fixture: ComponentFixture<LargePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
