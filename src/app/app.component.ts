import { Component, OnInit } from '@angular/core';
import fConfig from './mock/formconfig'
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn} from '@angular/forms';



@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="alert alert-primary text-center" role="alert">
                    <button type="button"  class="btn btn-primary btn-sm" >Modifica</button> 
      {{formConfig.title}}
    </div>
      <hr>
        <form  [formGroup]="reactiveForm" (ngSubmit)="submitForm()">
          <div class="form-group">

            <app-section *ngFor="let section of formConfig.sections"        [section]="section" 
              [group]="reactiveForm" 
            >
            </app-section>
              <hr>
                <button type="button"  (click)="reset()" class="btn btn-primary btn-sm" >Reset</button> 
          </div>
        </form>
        
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formConfig:any;
  reactiveForm: FormGroup = new FormGroup({});
  validators = [];
  

  constructor(private fb: FormBuilder) { 
    this.formConfig = fConfig;  
  }

  
  ngOnInit() {

  //this.validators = [] 
  let group = {};

    this.formConfig.sections.forEach(sections => {
      sections.rows.forEach(row => {
        row.fields.forEach(field => {

          field.rules.forEach(rule => {
           var x =  validatorFactory(rule)
           this.validators.push(x);
          })

          group[field.key] = [field.defaultValue, this.validators]
            this.reactiveForm = this.fb.group(group);
              this.validators = [];
        });
          this.reactiveForm.updateValueAndValidity();
      })
    });
        console.log(this.reactiveForm.controls); 
    


// funzione che mi converte il validatore del json in un validatorFn
    function validatorFactory(r): ValidatorFn {
      if (r.value) {
        return Validators[r.type](r.value);
      }
    return Validators[r.type];
    }


    
  } 
  


submitForm(){
  console.log(this.reactiveForm.value);  
}

reset(){
  this.reactiveForm.reset();
}



  
}

