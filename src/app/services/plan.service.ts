import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'      // service is globally available, singleton service
})

export class PlanService {

  private plans = [
    {
      id: 1, 
      name: 'Hala SIM', 
      description: 'Get FREE prepaid Halls SIM plus we will deliver it to you, the SAME day', 
      price: 10, 
      validity: 28, 
      data: '10GB', 
      details: 'The Hala SIM offers 10GB of data for 28 days with free same-day delivery. Perfect for staying connected affordably.', 
      image: 'assets/images/prepaid-hala.jpg',
      coverage: '5G'
    },
    {
      id: 2, 
      name: 'Visitor SIM', 
      description: 'Stay connected to family and friends back home while visiting', 
      price: 12, 
      validity: 30, 
      data: '20GB', 
      details: 'The Visitor SIM gives you 20GB of data for 30 days, with affordable international calls for staying connected abroad.', 
      image: 'assets/images/prepaid-visitor.png',
      coverage: '5G'
    },
    {
      id: 3, 
      name: 'Unlimited Connect', 
      description: 'Enjoy the best value with Unlimited Connect. Includes 25GB of data, unlimited calls, and more!', 
      price: 45, 
      validity: 40, 
      data: '256GB', 
      details: 'Unlimited Connect includes 25GB of data, unlimited local calls, and a 40-day validity. Perfect for worry-free connectivity.', 
      image: 'assets/images/prepaid-unlimited.jpg',
      coverage: '4G'
    }
  ];

  constructor() { }

  // method to get all plans
  getPlans() {
    return this.plans;
  }

  // method to getplansbyid
  getPlansById(id: number) {
    return this.plans.find(plan => plan.id === id);
  }

}
