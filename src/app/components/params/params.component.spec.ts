import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsComponent } from './params.component';

describe('ParamsComponent', () => {
  let component: ParamsComponent;
  let fixture: ComponentFixture<ParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
