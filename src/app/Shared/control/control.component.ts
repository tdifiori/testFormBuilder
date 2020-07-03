import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control',
  template: `

<div class="col" >
  <div [ngSwitch]="field.type" [formGroup]="group">
              
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
          class="form-control form-control-sm" 
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
          class="form-control form-control-sm" >
          <option *ngFor="let select of field.options" value={{select.value}}
          >{{select.title}}
          </option>
        </select>
      </div> 
  </div>
</div> 
  `,
  styleUrls: ['./control.component.css']
})
export class ControlInlinTemplateComponent implements OnInit {

@Input('field') field:any;
@Input('group') group:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}