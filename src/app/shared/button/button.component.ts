import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() label: string = 'Click Me';            // button text
  @Input() routerLink: string | null = null;      // navigation route
  @Input() type: 'button' | 'submit' = 'button';  // button type
}
