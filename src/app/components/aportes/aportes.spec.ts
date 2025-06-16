import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aportes } from './aportes';

describe('Aportes', () => {
  let component: Aportes;
  let fixture: ComponentFixture<Aportes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aportes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aportes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
