import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  selectedTab: number = 0;

  // method to switch between tabs
  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}

