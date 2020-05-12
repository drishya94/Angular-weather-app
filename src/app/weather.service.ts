import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService   {
  private url = 'http://api.openweathermap.org/data/2.5/weather';
    private forecasturl = 'http://api.openweathermap.org/data/2.5/forecast';

  apikey= '2072812fa0029f3d93a1a2c1b89f755d';
  latitude:number;
  longitude:number;
  constructor(private http:HttpClient) {

   }


//Get geolocation form the browser
  public getLocation() {
    let cusotmObserver = new Observable((observer) => {
      if (!navigator.geolocation) {
        observer.error();
      }

      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        observer.next({ latitude: position.coords.latitude, longitude: position.coords.longitude});
      });
    });

    return cusotmObserver;
  }

  //Using the geolocation get the Highlighted data
  public getGeoLocationAPI() {
     return this.http.get(this.url + "?lat=" + this.latitude + "&lon=" + this.longitude + "&appid=" + this.apikey);
  }
   
//forcast data
   public getGeoLocationForecastAPI() {
     return this.http.get(this.forecasturl + "?lat=" + this.latitude + "&lon=" + this.longitude + "&appid=" + this.apikey);
  }
   
  getLoc(location){
  	let params = new HttpParams();
	   params = params.append('q',location);
	   params = params.append('appid',this.apikey);

   return 	this.http.get(this.url,{params:params});
   }

   getLocforecast(location){
   	let params = new HttpParams();
	   params = params.append('q',location);
	   params = params.append('appid',this.apikey);

   return 	this.http.get(this.forecasturl,{params:params});
   }
}
