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

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeSliderComponent,
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
		FooterComponent
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
