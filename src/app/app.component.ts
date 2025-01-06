import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';     // for routing
import { FooterComponent } from './footer/footer.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RouterModule, FooterComponent],      // standalong usage instead of standalone: true
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Venetia Telecom';

  // state to track theme
  isDarkTheme: boolean = false;

  toggleDarkMode() {
    this.isDarkTheme = !this.isDarkTheme;
    // document.body.classList.toggle('dark', this.isDarkTheme);
    document.documentElement.classList.toggle('dark', this.isDarkTheme);
  }
}
