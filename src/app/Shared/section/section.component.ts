import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-section',
  template: `
  <div class="card" >
    <div class="card-header bg-info" >{{config.title}}</div> 
      <div class="card-body">

        <div class="row" [formGroup]="group">

          <div class="col-md" *ngFor="let rows of config.rows" >
            <div class="form-label-group" *ngFor="let field of rows.fields" >
              <div [ngSwitch]="field.type">
      
                <div  *ngSwitchCase="'text'" class="form-group" >
                    <label >{{field.label}}</label> 
                      <div class="row" >
                        <div *ngFor="let rule of field.rules" style="font-size:0.6em;">
                          {{rule.type + "("+ rule.value+")  ,  " }}
                        </div>
                      </div>

                    <input 
                      [ngClass]= "{
                        'is-invalid': group.controls[field.key].status === 'INVALID',
                        'is-valid': group.controls[field.key].status === 'VALID'
                      }"
                      formControlName="{{field.key}}"  
                      type="{{field.type}}" 
                      name="{{field.key}}"  
                      class="form-control form-control-md" 
                      placeholder="{{field.label}}" 
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
                <div class="row" >
                  <div *ngFor="let rule of field.rules" style="font-size:0.6em;">
                    {{rule.type + "("+ rule.value+")  ,  " }}
                  </div>
                </div>
                  <select 
                    [ngClass]= "{
                        'is-invalid': group.controls[field.key].status === 'INVALID',
                        'is-valid': group.controls[field.key].status === 'VALID'
                    }"
                    formControlName="{{field.key}}"  
                    name="{{field.key}}" 
                    class="form-control form-control-md" >
                    <option *ngFor="let select of field.options" value={{select.value}}
                    >{{select.title}}
                    </option>
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


