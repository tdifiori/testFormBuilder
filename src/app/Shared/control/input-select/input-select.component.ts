import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../../../interface/control';



@Component({
  selector: 'app-input-select',
  template: `
<div class="col" [formGroup]="group">  
   <label>{{config.label}}</label> 
        <select 
          [ngClass]= "{
              'is-invalid': group.controls[config.key].status === 'INVALID',
              'is-valid': group.controls[config.key].status === 'VALID'
          }"
          formControlName="{{config.key}}"  
          name="{{config.key}}" 
          class="form-control form-control-sm" >
          <option *ngFor="let select of config.options" value={{select.value}}>
            {{select.title}}
          </option>
        </select>
          <div class="row" >
            <div *ngFor="let rule of config.rules" style="font-size:0.6em;">
              {{rule.type + "("+ rule.value+")  ,  " }}
            </div>
          </div>
</div>
          `,
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements controlsProps {
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;


  constructor() { }



}