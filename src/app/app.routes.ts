import { Routes } from '@angular/router';
//import { NavbarComponent} from './shared/navbar/navbar';
import { EmployeeDashboardComponent } from './features/employee/employee-dashboard/employee-dashboard';
import { ManagerDashboardComponent } from './features/manager/manager-dashboard/manager-dashboard';
import { LeaveFormComponent } from './features/leave/leave-form/leave-form';
import { LeaveHistoryComponent } from './features/leave/leave-history/leave-history';


export const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeDashboardComponent },
  { path: 'manager', component: ManagerDashboardComponent },
  { path: 'leave/apply', component: LeaveFormComponent },
  { path: 'leave/history', component: LeaveHistoryComponent }
];
