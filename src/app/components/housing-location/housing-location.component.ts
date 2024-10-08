import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../interfaces/housinglocation.interface';


export interface InfoData{
  name:string;
  datum:string;
}

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input()
  public housingLocation?:HousingLocation;

  public data:InfoData = {
    name:"ramiro",
    datum:"another"
  }

}
