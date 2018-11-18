import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummerProgramsComponent } from './summer-programs/summer-programs.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
	{ path: 'summer-programs', component: SummerProgramsComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
