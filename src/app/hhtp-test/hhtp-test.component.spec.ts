import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HhtpTestComponent } from './hhtp-test.component';

describe('HhtpTestComponent', () => {
  let component: HhtpTestComponent;
  let fixture: ComponentFixture<HhtpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HhtpTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HhtpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
