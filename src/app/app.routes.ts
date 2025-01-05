import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'plans', component: PlansComponent},
    {path: 'plan-details/:id', component: PlanDetailsComponent}
];
