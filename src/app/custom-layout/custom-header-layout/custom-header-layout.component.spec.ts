import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderLayoutComponent } from './custom-header-layout.component';

describe('CustomHeaderLayoutComponent', () => {
  let component: CustomHeaderLayoutComponent;
  let fixture: ComponentFixture<CustomHeaderLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomHeaderLayoutComponent]
    });
    fixture = TestBed.createComponent(CustomHeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
