import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConversionComponent } from './show-conversion.component';

describe('ShowConversionComponent', () => {
  let component: ShowConversionComponent;
  let fixture: ComponentFixture<ShowConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
