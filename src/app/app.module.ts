import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherHighlightComponent } from './weather-highlight/weather-highlight.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { UnixtimePipe } from './unixtime.pipe';
import { WindconveterPipe } from './windconveter.pipe';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    WeatherHighlightComponent,
    WeatherTodayComponent,
    UnixtimePipe,
    WindconveterPipe,
    HeaderComponent,
    TestComponent,
    FeaturesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
