import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housinglocation.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  public route:ActivatedRoute = inject(ActivatedRoute);
  public housingService:HousingService = inject(HousingService);
  public fb:FormBuilder = inject(FormBuilder);

  public applyForm:FormGroup = this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['', [Validators.required, Validators.email]]
  });

  public housingLocation?:HousingLocation;

  public housingLocationId:number = -1;

  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }


  isValidField(field:string): boolean{
    return this.applyForm.controls[field] && this.applyForm.controls[field].touched;
  }

  getFieldError(field:string): string | null{
    console.log(this.applyForm.controls[field]);

    if(!this.applyForm.controls[field]) return null;

    const errors = this.applyForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`
        case 'min':
          return `La cantidad debe ser de minimo ${errors['min'].min}`
        case 'email':
          return 'Este campo debe ser un email'
      }
    }
    return null;
  }

  submitApplication(){
    if(this.applyForm.invalid){
      this.applyForm.markAllAsTouched();
      return;
    }

    this.housingService.submitApplication(
      this.applyForm.value['firstName'],
      this.applyForm.value['lastName'],
      this.applyForm.value['email'],
    );
  }

}
