import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
	resLoc = [];
	resForecast=[];
  countries:Array<string> = ['London','India','Australia','Kerala','Kannur','Kochi'];

  constructor(private service: WeatherService) { }

  ngOnInit() {
  	//fetching geolocation 
  	this.service.getLocation().pipe(switchMap((ev)=>
      this.service.getGeoLocationAPI()))
        .subscribe(response=>{
        console.log(response);
          const weather = {
        data: response
      }
      this.resLoc.push(weather);
       
      });
    
    //values from forecast

    this.service.getLocation().pipe(switchMap((ev)=>
      this.service.getGeoLocationForecastAPI()))
        .subscribe(response=>{
        console.log(response);
          const weather = {
        data: response
      }
      this.resForecast.push(weather);
       
      });
   
  }




  changeLocation(place){
  	this.resLoc = [];
  	 this.service.getLoc(place.value)
  	 .subscribe(response=>{
  	 	const weather = {
  	 		data: response
  	 	}
  	 	this.resLoc.push(weather);
  	 	 
  	 	  console.log(this.resLoc);
  	 });

      this.resForecast = [];
      this.service.getLocforecast(place.value)
         .subscribe(response=>{
          const weather = {
            data: response
          }
          this.resForecast.push(weather);
           
            console.log(this.resForecast);
         })
  }

  

hasObject(obj){
	return (obj && (Object.keys(obj).length > 0));
}

}