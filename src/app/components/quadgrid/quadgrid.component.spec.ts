import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadgridComponent } from './quadgrid.component';

describe('QuadgridComponent', () => {
  let component: QuadgridComponent;
  let fixture: ComponentFixture<QuadgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
