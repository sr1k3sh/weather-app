import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremoveIconComponent } from './addremove-icon.component';

describe('AddremoveIconComponent', () => {
  let component: AddremoveIconComponent;
  let fixture: ComponentFixture<AddremoveIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddremoveIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremoveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
