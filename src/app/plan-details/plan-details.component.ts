import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-plan-details',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './plan-details.component.html',
  styleUrl: './plan-details.component.css'
})

export class PlanDetailsComponent {
  
  plan: any = [];

  constructor(private route: ActivatedRoute, private planService: PlanService) {}

  ngOnInit() {
    // extracts the plan id from the route
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // finds the corresponding plan
    // this.plan = this.plans.find(plan => plan.id === id);

    // fetches plan details
    this.plan = this.planService.getPlansById(id);

  }

  buyPlan(planId: number) {
    console.log(`Plan ${planId} purchased!`);
  }

}
