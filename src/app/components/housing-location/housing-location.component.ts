import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../interfaces/housinglocation.interface';




@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input()
  public housingLocation?:HousingLocation;



}
