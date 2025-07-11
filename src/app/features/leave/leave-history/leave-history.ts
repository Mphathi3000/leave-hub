import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LeaveRequest {
  type: string;
  startDate: string;
  endDate: string;
  reason?: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-history.html',
  styleUrls: ['./leave-history.scss']
})
export class LeaveHistoryComponent {
  leaveRequests: LeaveRequest[] = [
    {
      type: 'Annual Leave',
      startDate: '2025-06-01',
      endDate: '2025-06-07',
      reason: 'Family vacation',
      status: 'Approved'
    },
    {
      type: 'Sick Leave',
      startDate: '2025-06-15',
      endDate: '2025-06-17',
      status: 'Pending'
    },
    {
      type: 'Unpaid Leave',
      startDate: '2025-05-10',
      endDate: '2025-05-12',
      reason: 'Personal matter',
      status: 'Rejected'
    }
  ];
}
