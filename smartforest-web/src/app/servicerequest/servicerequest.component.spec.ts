import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerequestComponent } from './servicerequest.component';

describe('ServicerequestComponent', () => {
  let component: ServicerequestComponent;
  let fixture: ComponentFixture<ServicerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
