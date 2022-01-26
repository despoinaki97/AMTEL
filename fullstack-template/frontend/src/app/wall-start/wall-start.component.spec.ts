import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallStartComponent } from './wall-start.component';

describe('WallStartComponent', () => {
  let component: WallStartComponent;
  let fixture: ComponentFixture<WallStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
