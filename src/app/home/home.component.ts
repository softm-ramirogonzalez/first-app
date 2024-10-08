import { Component } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public data = "dsd";

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  public housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };



}
