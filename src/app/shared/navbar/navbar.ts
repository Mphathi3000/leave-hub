import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  navLinks = [
    { label: 'Employee Dashboard', path: '/employee' },
    { label: 'Manager Dashboard', path: '/manager' },
    { label: 'Apply Leave', path: '/leave/apply' },
    { label: 'Leave History', path: '/leave/history' }
  ];
}
