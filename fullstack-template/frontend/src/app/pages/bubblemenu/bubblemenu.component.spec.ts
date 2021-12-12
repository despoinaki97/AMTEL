import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblemenuComponent } from './bubblemenu.component';

describe('BubblemenuComponent', () => {
  let component: BubblemenuComponent;
  let fixture: ComponentFixture<BubblemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubblemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
