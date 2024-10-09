import { Component, inject, OnInit } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation.interface';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public filteredLocationList: HousingLocation[] = [];

  public housingLocationList:HousingLocation[] = [];

  public housingLocation!:HousingLocation;

  public housingService = inject(HousingService);

  ngOnInit(): void {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = structuredClone(this.housingLocationList);
  }

  filterResults(text:string){
    if(!text.trim()){
      this.filteredLocationList = structuredClone(this.housingLocationList);
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );

  }

}
