import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEmptyComponent } from './tv-empty.component';

describe('TvEmptyComponent', () => {
  let component: TvEmptyComponent;
  let fixture: ComponentFixture<TvEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
