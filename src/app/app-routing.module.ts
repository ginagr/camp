import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { SummerProgramsComponent } from './summer-programs/summer-programs.component';
import { SummerRegistrationComponent } from './summer-registration/summer-registration.component';
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

const routes: Routes = [
  { path: 'summer-programs', component: SummerProgramsComponent },
  { path: 'summer-registration', component: SummerRegistrationComponent },
  { path: 'winter-programs', component: WinterProgramsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'board', component: BoardComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'lodging', component: LodgingComponent },
  { path: 'dining', component: DiningComponent },
  { path: 'medical', component: MedicalComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'summer-fees', component: SummerFeesComponent },
  { path: 'winter-fees', component: WinterFeesComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'non-profit', component: NonProfitComponent },
  { path: 'directions', component: DirectionsComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'what-to-bring', component: WhatToBringComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pledge-form', component: PledgeFormComponent },
  { path: 'blog/feb-movie', component: FebMovieComponent },
  { path: 'blog/winter-camp-cancelled', component: WinterCampCancelledComponent },
  { path: 'blog/curious', component: CuriousComponent },
  { path: 'blog/coming-out', component: ComingOutComponent },
  { path: 'blog/note-from-jill', component: NoteFromJillComponent },
  { path: 'blog/directors-report-sixteen', component: DirectorsReportSixteenComponent },
  { path: 'blog/directors-report-fifteen', component: DirectorsReportFifteenComponent },
  { path: 'blog/talent-show-fourteen', component: TalentShowFourteenComponent },
  { path: 'search-terms', component: SearchTermsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'complete-applications', component: CompleteApplicationsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
