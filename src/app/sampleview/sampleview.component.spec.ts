import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleviewComponent } from './sampleview.component';

describe('SampleviewComponent', () => {
  let component: SampleviewComponent;
  let fixture: ComponentFixture<SampleviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
