import { Component, OnInit } from '@angular/core';
import { ForecastService } from './services/forecast.service';
import { GeolocationService } from './services/geolocation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'weather';
  
  constructor(private forecastService: ForecastService, public geolocationService : GeolocationService){}

  ngOnInit(){
    this.forecastService.weather$.subscribe(console.log);
  }
}
