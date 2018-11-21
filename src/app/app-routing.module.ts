import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummerProgramsComponent } from './summer-programs/summer-programs.component';
import { WinterProgramsComponent } from './winter-programs/winter-programs.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { OverviewComponent }   from './overview/overview.component';
import { MissionComponent }   from './mission/mission.component';
import { BoardComponent }   from './board/board.component';
import { StaffComponent }   from './staff/staff.component';
import { LodgingComponent }   from './lodging/lodging.component';
import { DiningComponent }   from './dining/dining.component';
import { MedicalComponent }   from './medical/medical.component';

const routes: Routes = [
	{ path: 'summer-programs', component: SummerProgramsComponent },
	{ path: 'winter-programs', component: WinterProgramsComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'overview', component: OverviewComponent },
	{ path: 'mission', component: MissionComponent },
	{ path: 'board', component: BoardComponent },
	{ path: 'staff', component: StaffComponent },
	{ path: 'lodging', component: LodgingComponent },
	{ path: 'dining', component: DiningComponent },
	{ path: 'medical', component: MedicalComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
