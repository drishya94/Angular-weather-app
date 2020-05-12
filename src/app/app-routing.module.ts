import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';


const routes: Routes = [
	{ path: '',component:HomeComponent},
	{ path: 'weather',component: WeatherFormComponent},
	{ path: 'features',component: FeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
