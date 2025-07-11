import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manager-dashboard.html',
  styleUrls: ['./manager-dashboard.scss']
})
export class ManagerDashboardComponent {
  managerName: string = 'Asiphe Mtingane';
  pendingApprovals: number = 3;
  totalTeamMembers: number = 8;
  approvedLeaves: number = 15;
}
