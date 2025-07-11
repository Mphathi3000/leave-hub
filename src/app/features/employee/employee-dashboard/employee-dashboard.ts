import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-dashboard.html',
  styleUrls: ['./employee-dashboard.scss']
})
export class EmployeeDashboardComponent {
  employeeName: string = 'Asiphe Mtingane';
  leaveBalance: number = 12;
  leavesTaken: number = 5;
  pendingRequests: number = 1;
}
