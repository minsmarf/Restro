import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoNewComponent } from './resto-new.component';

describe('RestoNewComponent', () => {
  let component: RestoNewComponent;
  let fixture: ComponentFixture<RestoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
