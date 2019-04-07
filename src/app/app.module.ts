import { BrowserModule, Title }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { NavbarComponent } from './navbar/navbar.component';
import { SummerProgramsComponent } from './summer-programs/summer-programs.component';
import { WinterProgramsComponent } from './winter-programs/winter-programs.component';
import { HomeComponent } from './home/home.component';
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
import { FebMovieComponent } from './blog/feb-movie/feb-movie.component';
import { WinterCampCancelledComponent } from './blog/winter-camp-cancelled/winter-camp-cancelled.component';
import { CuriousComponent } from './blog/curious/curious.component';
import { ComingOutComponent } from './blog/coming-out/coming-out.component';
import { NoteFromJillComponent } from './blog/note-from-jill/note-from-jill.component';
import { DirectorsReportSixteenComponent } from './blog/directors-report-sixteen/directors-report-sixteen.component';
import { DirectorsReportFifteenComponent } from './blog/directors-report-fifteen/directors-report-fifteen.component';
import { TalentShowFourteenComponent } from './blog/talent-show-fourteen/talent-show-fourteen.component';
import { SearchTermsComponent } from './search-terms/search-terms.component';
import { CareersComponent } from './careers/careers.component';
import { ApplicationsComponent } from './applications/applications.component';
import { CompleteApplicationsComponent } from './complete-applications/complete-applications.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SummerProgramsComponent,
		HomeComponent,
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
		PledgeFormComponent,
		FebMovieComponent,
		WinterCampCancelledComponent,
		CuriousComponent,
		ComingOutComponent,
		NoteFromJillComponent,
		DirectorsReportSixteenComponent,
		DirectorsReportFifteenComponent,
		TalentShowFourteenComponent,
		SearchTermsComponent,
		CareersComponent,
		ApplicationsComponent,
		CompleteApplicationsComponent,
		LoginComponent,
		ChangePasswordComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		ReactiveFormsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,
		AngularFireAuthModule,
		PdfViewerModule,
		FormsModule
	],
	providers: [
		AuthService,
		AuthGuard,
		Title,
		{ provide: FirestoreSettingsToken, useValue: {} }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
