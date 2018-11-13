import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightMatrixComponent } from './weight-matrix.component';

describe('WeightMatrixComponent', () => {
  let component: WeightMatrixComponent;
  let fixture: ComponentFixture<WeightMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
