import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloattitleComponent } from './floattitle.component';

describe('FloattitleComponent', () => {
  let component: FloattitleComponent;
  let fixture: ComponentFixture<FloattitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloattitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloattitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
