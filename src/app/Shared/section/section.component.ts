import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-section',
  template: `
  <div class="card" >
    <div class="card-header bg-info" >{{config.title}}</div>
      <div class="card-body">

        <div class="row" [formGroup]="group">

          <div class="col-sm" *ngFor="let rows of config.rows" >
            <div class="form-label-group" *ngFor="let field of rows.fields" >
              <div [ngSwitch]="field.type">
      
                <div  *ngSwitchCase="'text'" class="form-group" >
                    <label >{{field.label}}</label>
                    <input 
                      formControlName="{{field.key}}"  
                      type="{{field.type}}" 
                      name="{{field.key}}"  
                      class="form-control form-control-sm" 
                      placeholder="{{field.label}}" 
                      [ngClass]= "{
                        'is-invalid': thisControl === 'invalid',
                        'is-valid': thisControl === 'valid'
                      }"
                   >   
                </div>              

                <div  *ngSwitchCase="'radio'" class="form-check">
                  <input class="form-check-input" 
                    formControlName="{{field.key}}" 
                    type="{{field.type}}" 
                    name="{{field.key}}" 
                    value="option2"
                  >
                  <label class="form-check-label">{{field.label}}</label>
                </div>



                <div *ngSwitchCase="'select'" >
                <label>{{field.label}}</label>
                  <select 
                    formControlName="{{field.key}}"  
                    name="{{field.key}}" 
                    class="form-control form-control-sm" >
                    <option *ngFor="let select of field.options">{{select.title}}</option>
                  </select>
                </div>        




              </div> 
            </div>
          </div><!-- end col -->

        </div><!-- end row -->
       

    </div><!-- end card body -->
  </div>
  <hr>
  `,
  styleUrls: ['./section.component.scss']
})



export class SectionComponent implements OnInit {

  @Input('sectionForm') config:any;
  @Input('group') group:FormGroup;

  
 

  
  constructor() {

   }


  ngOnInit() {

  
  }
 


  
}
























/* import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-section',
  template: `
  <div class="card" >
    <div class="card-header bg-info" >{{config.title}}</div>
      <div class="card-body">
<form [formGroup]="reactiveForm">

        <div class="row">

          <div class="col-sm" *ngFor="let rows of config.rows" >
            <div class="form-label-group" *ngFor="let field of rows.fields" >
              <div [ngSwitch]="field.type">
      
                <label>{{field.label}}</label>
                  <input  *ngSwitchCase="'text'" formControlName="{{field.key}}"  type="{{field.type}}" name="{{field.key}}"  class="form-control" placeholder="{{field.label}}" required autofocus>   
              
                  <select *ngSwitchCase="'select'" formControlName="{{field.key}}"  name="{{field.key}}" class="form-control" >
                    <option *ngFor="let select of field.options">{{select.title}}</option>
                  </select>

              </div> 
            </div>
          </div><!-- end col -->

        </div><!-- end row -->
       
</form>
    </div><!-- end card body -->
  </div>
  <pre><code>{{ reactiveForm.value | json }}</code></pre>
  <hr>
  `,
  styleUrls: ['./section.component.scss']
})



export class SectionComponent implements OnInit {

  @Input('sectionForm') config:any;
  @Output() result = new EventEmitter();
  
  reactiveForm: FormGroup;

  
  constructor(private fb: FormBuilder) {

   }


  ngOnInit() {
    let group = {};
    this.config.rows.forEach(param => {
      param.fields.forEach(field => {
         group[field.key] = [''];
       
       });

     });
     this.reactiveForm = this.fb.group(group);
     this.result.emit(this.reactiveForm); 
  
    }
 


  
} */
