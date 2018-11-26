import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { NavbarComponent } from './navbar/navbar.component';
import { SummerProgramsComponent } from './summer-programs/summer-programs.component';
import { WinterProgramsComponent } from './winter-programs/winter-programs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { MissionComponent } from './mission/mission.component';
import { BoardComponent } from './board/board.component';
import { StaffComponent } from './staff/staff.component';
import { LodgingComponent } from './lodging/lodging.component';
import { DiningComponent } from './dining/dining.component';
import { MedicalComponent } from './medical/medical.component';
import { FormsComponent } from './forms/forms.component';
import { SummerFeesComponent } from './summer-fees/summer-fees.component';
import { WinterFeesComponent } from './winter-fees/winter-fees.component';
import { CampaignComponent } from './campaign/campaign.component';
import { FooterComponent } from './footer/footer.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { NonProfitComponent } from './non-profit/non-profit.component';
import { DirectionsComponent } from './directions/directions.component';
import { WeatherComponent } from './weather/weather.component';
import { WhatToBringComponent } from './what-to-bring/what-to-bring.component';
import { SongsComponent } from './songs/songs.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { PledgeFormComponent } from './pledge-form/pledge-form.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SummerProgramsComponent,
		DashboardComponent,
		WinterProgramsComponent,
		OverviewComponent,
		MissionComponent,
		BoardComponent,
		StaffComponent,
		LodgingComponent,
		DiningComponent,
		MedicalComponent,
		FormsComponent,
		SummerFeesComponent,
		WinterFeesComponent,
		CampaignComponent,
		FooterComponent,
		ConditionsComponent,
		NonProfitComponent,
		DirectionsComponent,
		WeatherComponent,
		WhatToBringComponent,
		SongsComponent,
		NewsComponent,
		ContactComponent,
		PledgeFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		PdfViewerModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
