import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveFormComponent } from './leave-form';

describe('LeaveFormComponent', () => {
  let component: LeaveFormComponent;
  let fixture: ComponentFixture<LeaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveFormComponent] // ✅ Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
