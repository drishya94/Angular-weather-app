import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.css']
})
export class WeatherTodayComponent implements OnInit {
@Input() resForecastData;
  constructor() { }

  ngOnInit(): void {
  }

	hasObject(obj){
		return (obj && Object.keys(obj).length > 0);
	}
}
