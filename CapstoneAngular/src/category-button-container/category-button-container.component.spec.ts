import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryButtonContainerComponent } from './category-button-container.component';

describe('CategoryButtonContainerComponent', () => {
  let component: CategoryButtonContainerComponent;
  let fixture: ComponentFixture<CategoryButtonContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryButtonContainerComponent]
    });
    fixture = TestBed.createComponent(CategoryButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
