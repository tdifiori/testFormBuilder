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
  reactiveForm: FormGroup = new FormGroup({});
  validators = []  //new Array<Validators>();



  constructor(private fb: FormBuilder) { 
    this.formConfig = fConfig;  
  }

  
  ngOnInit() {
  this.validators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(5)
  ] 


    this.formConfig.sections.forEach(sections => {
      sections.rows.forEach(row => {
        row.fields.forEach(field => {
          this.reactiveForm.addControl(field.key, new FormControl("" ));
          this.reactiveForm.get(field.key).setValidators(this.validators);
        });
          this.reactiveForm.updateValueAndValidity();
      })
    });

    console.log(this.validators) 
    
  } 
  
 
// lineare json ****************************

  /*   let group = {};
    group['titleForm'] = [this.formConfig.title];
    group['description'] = [this.formConfig.description];
      this.formConfig.sections.forEach(sections => {
        sections.rows.forEach(row => {
          row.fields.forEach(field => {
            group[field.key] = ['bbb']
          })
        })
      });
        this.reactiveForm = this.fb.group(group);
        console.log("modello reactiveform: ",this.reactiveForm.value); */


  

submitForm(){
  console.log(this.reactiveForm.value);  
}

reset(){
  this.reactiveForm.reset();
}



  
}

