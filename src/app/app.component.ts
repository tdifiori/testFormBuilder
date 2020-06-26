import { Component, OnInit } from '@angular/core';
import fConfig from './mock/formconfig'
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';




@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="alert alert-primary text-center" role="alert">{{formConfig.title}}</div>
      <hr>
        <form  [formGroup]="reactiveForm" (ngSubmit)="submitForm()" >
          <app-section *ngFor="let section of formConfig.sections" [sectionForm]="section" [group]="reactiveForm" ></app-section>
            <button type="submit"  class="btn btn-primary">Invia</button> <b>form status:</b> {{ reactiveForm.status | json}}
            <hr>
            <button type="button"  (click)="reset()" class="btn btn-primary">Reset</button> 
        </form>
        form value: {{ reactiveForm.value | json }}
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formConfig:any;

  thisControl:any = "";
  reactiveForm: FormGroup = new FormGroup({});
  validators = []  //new Array<Validators>();
  

  constructor(private fb: FormBuilder) { 
    this.formConfig = fConfig;  
  }

  
  ngOnInit() {
  // questo è un array statico ma in realta poi prendero quello che sta nel json
  this.validators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(55)
  ] 


// qui invece nn faccio altro che scorrere sul json 
    this.formConfig.sections.forEach(sections => {
      sections.rows.forEach(row => {
        row.fields.forEach(field => {
          this.reactiveForm.addControl(field.key, new FormControl(field.defaultValue));
          this.reactiveForm.get(field.key).setValidators(this.validators);
          this.thisControl = this.reactiveForm.get(field.key).status;
          console.log("controllo status ",field.key + "->"+ this.thisControl) 
          
        });
          this.reactiveForm.updateValueAndValidity();
      })
    });

    
    
  } 
  


submitForm(){
  console.log(this.reactiveForm.value);  
}

reset(){
  this.reactiveForm.reset();
}



  
}

