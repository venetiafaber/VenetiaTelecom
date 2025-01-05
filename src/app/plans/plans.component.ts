import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-plans',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})

export class PlansComponent {

  plans: any [];

  constructor(private router: Router, private planService: PlanService) {
    // gets plans from the service
    this.plans = this.planService.getPlans();
  }

  viewDetails(id: number) {
    this.router.navigate(['/plan-details',id]);
  }

  // function to scroll to the plan section
  scrollToPlans() {
    const planSection = document.getElementById('plans');
    if (planSection) {
      planSection.scrollIntoView({ behavior: 'smooth'});
    }
  }
}
