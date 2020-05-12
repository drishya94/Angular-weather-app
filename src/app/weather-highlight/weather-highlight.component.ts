import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-weather-highlight',
  templateUrl: './weather-highlight.component.html',
  styleUrls: ['./weather-highlight.component.css']
})
export class WeatherHighlightComponent implements OnInit {

@Input() resLocData;
  constructor() { }

  ngOnInit(): void {
  }
  convertkelventocelcius(){
  	
  }
}
