import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvindexComponent } from './uvindex.component';

describe('UvindexComponent', () => {
  let component: UvindexComponent;
  let fixture: ComponentFixture<UvindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
