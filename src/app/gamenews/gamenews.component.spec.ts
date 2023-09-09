import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamenewsComponent } from './gamenews.component';

describe('GamenewsComponent', () => {
  let component: GamenewsComponent;
  let fixture: ComponentFixture<GamenewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamenewsComponent]
    });
    fixture = TestBed.createComponent(GamenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
