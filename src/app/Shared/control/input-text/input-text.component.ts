import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controls } from '../../../interface/control';


@Component({
  selector: 'app-input-text',
 template: `
 <div class="col" [formGroup]="group">
  <label >{{field.label}}</label> 
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
      <div class="row" style="font-size:0.6em;">
        <div  *ngFor="let rule of field.rules" >
          {{rule.type + "("+ rule.value+")  ,  " }}
        </div>
      </div>
</div>    
 `,
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements controls {

fieldConfig:any;
group:FormGroup;

  constructor() { }

 

}