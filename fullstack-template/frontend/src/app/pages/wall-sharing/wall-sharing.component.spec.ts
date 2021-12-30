import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallSharingComponent } from './wall-sharing.component';

describe('WallSharingComponent', () => {
  let component: WallSharingComponent;
  let fixture: ComponentFixture<WallSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
