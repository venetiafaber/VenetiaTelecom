import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';     // for routing
import { FooterComponent } from './footer/footer.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of, from } from 'rxjs';
import { error } from 'console';

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

  // using observable constructor
  // myObservable = new Observable((observer) => {   // observer is the subscriber
  //   console.log('Observable starts')
  //   setTimeout( () => { observer.next("1")}, 1000)
  //   setTimeout( () => { observer.next("2")}, 2000)
  //   setTimeout( () => { observer.next("3")}, 3000)
  //   // setTimeout( () => { observer.error(new Error('Something went wrong! Please try again later'))}, 3000)   // values after error will not be emitted or the complete
  //   setTimeout( () => { observer.next("4")}, 4000)
  //   setTimeout( () => { observer.next("5")}, 5000)
  //   setTimeout( () => { observer.complete()}, 3000)   // once a complete signal is emitted from the observable, after that no value will be emitted from the observable

  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  //   // observer.next("4")
  //   // observer.next("5")

  // });

  // // using create method - behind the scenes the create() uses observable constructor
  // myObservable = Observable.create( (observer) => {
  //   setTimeout( () => {observer.next("A")}, 1000)
  //   setTimeout( () => {observer.next("B")}, 2000)
  //   setTimeout( () => {observer.next("C")}, 3000)
  //   setTimeout( () => {observer.next("D")}, 4000)
  //   setTimeout( () => {observer.next("E")}, 5000)
  // });

  // array1 = [1,2,6,7,8];
  // array2 = ['A', 'B', 'C'];

  // myObservable = of(this.array1, this.array2, 20, 45, 'Hello');    // emits the iterable (array) as it is, takes n number of args
  
  // myObservable = from(this.array1);   
  // emits all the values in the iterable, 
  // from operator takes only one argument unlike the of operator (n arguments)
  // can convert a promise to observable using from operator
  

  // ngOnInit() {
  //   this.myObservable.subscribe( (val) => {
  //     console.log(val);
  //   }, (error) => {
  //     alert(error.message);
  //   }, () => {
  //     alert('Observable complete.');
  //   }
  //   );   
  // }

  
}
