import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppal } from './ppal';

describe('Ppal', () => {
  let component: Ppal;
  let fixture: ComponentFixture<Ppal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ppal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ppal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
