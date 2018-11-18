import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { SummerProgramsComponent } from './summer-programs/summer-programs.component';
import { WinterProgramsComponent } from './winter-programs/winter-programs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeSliderComponent,
		SummerProgramsComponent,
		DashboardComponent,
		WinterProgramsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
