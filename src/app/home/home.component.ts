import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ButtonComponent } from '../shared/button/button.component';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('10s ease-in', style({ opacity: 1} ))
      ]),
    ]),
  ]
})

export class HomeComponent {
  selectedTab: number = 0;

  // method to switch between tabs
  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}

