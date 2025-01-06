import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({          // Component decorator
  selector: 'app-navbar',         // name of the component selector
  imports: [RouterModule, ButtonComponent, CommonModule],        // import property to add dependent components.
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  @Input() isDarkTheme: boolean = false;              // receives state from AppComponent
  @Output() toggleDarkMode: EventEmitter<void> = new EventEmitter<void>();

  title = 'Navbar';
  brandName = 'Venetia Telecom';
  isLoggedIn: boolean = false;
  menuItems: string[] = ['Home', 'Plans'];

  // state to track menu's state
  isMenuOpen: boolean = false;

  // method to toggle the menu for mobile view
  toggleMenu () {
    this.isMenuOpen = !this.isMenuOpen;
  }

}