import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdentityComponent } from './get-identity.component';

describe('GetIdentityComponent', () => {
  let component: GetIdentityComponent;
  let fixture: ComponentFixture<GetIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
