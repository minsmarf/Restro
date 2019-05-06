import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoAllComponent } from './resto-all.component';

describe('RestoAllComponent', () => {
  let component: RestoAllComponent;
  let fixture: ComponentFixture<RestoAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
