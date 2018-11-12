import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmatrixComponent } from './umatrix.component';

describe('UmatrixComponent', () => {
  let component: UmatrixComponent;
  let fixture: ComponentFixture<UmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
