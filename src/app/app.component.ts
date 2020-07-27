import { Component, OnInit } from '@angular/core';
import fConfig from './mock/formconfig'
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router'

declare var $: any;


@Component({
  selector: 'app-root',
  template: `

<!-- Button to Open the Modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" (click)="showModal()">
  Open modal
</button>

<!-- The Modal -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" (click)="hideModal()">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        Modal body..
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" (click)="hideModal()">Close</button>

        <!-- this button is hidden, used to close from typescript -->
        <button type="button" id="close-modal" data-dismiss="modal" style="display: none">Close</button>
      </div>
    </div>
  </div>
</div>


  <div class="container">
  <app-form-maker></app-form-maker>

<hr>
    <div class="alert alert-primary text-center" role="alert">
        <button 
          type="button"  
          class="btn btn-primary btn-sm"
          (click)="router.navigate(['/modificaform']);"
          >Modifica
        </button> 
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
  

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.formConfig = fConfig;  
  }

  
  ngOnInit() {
    
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


showModal():void {
        $("#myModal").modal('show');
      }

hideModal():void {
  document.getElementById('close-modal').click();
}

  
}

