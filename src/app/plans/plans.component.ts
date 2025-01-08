import { Component, SimpleChanges, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
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

  @Input() updatedPlan: any;      // simulates an input property for updates
  plans: any [];
  isPurple: boolean = false;
  intervalId: any;

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

  // ngOnInit to change the color
  ngOnInit(): void {
    
    // change the color after 5 sec
    setTimeout( () => {
      this.isPurple = true;
    }, 3000);

    // starts an interval to simulate polling or live updates
    // this.intervalId = setInterval( () => {
    //   console.log('Polling for updates...');
    // }, 10000);      // poll every 10 sec
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes['updatedPlan']) {
  //     console.log('Updated plan details: ', changes['updatedPlan'].currentValue);
  //   }
  // }

  // ngOnDestroy(): void {
  //   // clean up the interval to avoid memory leaks
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  //   console.log('PlansComponent destroyed!');
  // }
}
