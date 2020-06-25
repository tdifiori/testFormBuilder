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
      
                <label>{{field.label}}</label>
                  <input  *ngSwitchCase="'text'" formControlName="{{field.key}}"  type="{{field.type}}" name="{{field.key}}"  class="form-control" placeholder="{{field.label}}" required autofocus>   
              
                  <select *ngSwitchCase="'select'" formControlName="{{field.key}}"  name="{{field.key}}" class="form-control" >
                    <option *ngFor="let select of field.options">{{select.title}}</option>
                  </select>
        
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
