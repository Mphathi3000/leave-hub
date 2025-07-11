import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-leave-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './leave-form.html',
  styleUrls: ['./leave-form.scss']
})
export class LeaveFormComponent {
  form: FormGroup;
  workingDays = signal<number | null>(null);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      employeeName: ['', [Validators.required, Validators.minLength(3)]],
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Subscribe specifically to startDate and endDate changes
    this.form.get('startDate')?.valueChanges.subscribe(() => this.calculateWorkingDays());
    this.form.get('endDate')?.valueChanges.subscribe(() => this.calculateWorkingDays());
  }

  calculateWorkingDays(): void {
    const start = new Date(this.form.get('startDate')?.value);
    const end = new Date(this.form.get('endDate')?.value);

    if (start && end && !isNaN(start.getTime()) && !isNaN(end.getTime()) && end >= start) {
      let count = 0;
      const current = new Date(start);

      while (current <= end) {
        const day = current.getDay();
        if (day !== 0 && day !== 6) count++; // Exclude weekends
        current.setDate(current.getDate() + 1);
      }

      this.workingDays.set(count);
    } else {
      this.workingDays.set(null);
    }
  }

  submitForm(): void {
    if (this.form.valid) {
      alert('Leave Submitted!\n' + JSON.stringify(this.form.value, null, 2));
    } else {
      this.form.markAllAsTouched();
    }
  }
}
