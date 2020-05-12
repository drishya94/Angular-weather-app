import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHighlightComponent } from './weather-highlight.component';

describe('WeatherHighlightComponent', () => {
  let component: WeatherHighlightComponent;
  let fixture: ComponentFixture<WeatherHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
