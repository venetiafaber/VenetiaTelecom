import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'plans', component: PlansComponent},
    // {
    //     path: 'plan-details/:id', 
    //     component: PlanDetailsComponent,
    //     data: { renderMode: 'prerender'},                           // prerender for parameterized route
    // },
    {
        path: 'about', 
        loadComponent: () => import('./about/about.component')      // lazy loading the AboutComponent
            .then(c => c.AboutComponent)
    }, 
    { path: 'login', component: LoginComponent},         
    {path: '*', redirectTo: '/', pathMatch: 'full'}                 // wildcard route
];

export function getPrerenderParams(route: string) {
    if (route == 'plan-details/:id') {
        return [{id: '1'}, {id: '2'}, {id: '3'}];
    }
    return [];
}
