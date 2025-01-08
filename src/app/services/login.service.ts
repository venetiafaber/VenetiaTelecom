import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'      // makes the service a singleton, one instance, avaiable globally
})


export class LoginService {

  private users = [
    {username: 'admin', password: 'admin123'},
    {username: 'user', password: 'user123'}
  ];

  // login state variable
  // private isLoggedIn: boolean = false;
  
  // loggedInSubject is a BehaviorSubject to hold and notify login state changes
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  // observable to track login status
  // exposes the login status as an Observable
  // other components can subscribe to this.
  getLoginStatus() {
    return this.loggedInSubject.asObservable();
  }

  // simulate login logic with static data
  login(username: string, password: string) {
    const user = this.users.find( u => u.username === username && u.password === password
    );
    if (user) {
      // sets login state to true
      // this.isLoggedIn = true;
      this.loggedInSubject.next(true);    // emits the next value as true
      return true;    
    } else {
      return false; 
    }
  }
  

  // method to log out the user
  logout() {
    this.loggedInSubject.next(false);   // emits the next value as false
  }

  
}
