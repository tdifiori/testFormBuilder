import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  template: `
<div class="col" [formGroup]="group">  
   <label>{{field.label}}</label> 
        <select 
          [ngClass]= "{
              'is-invalid': group.controls[field.key].status === 'INVALID',
              'is-valid': group.controls[field.key].status === 'VALID'
          }"
          formControlName="{{field.key}}"  
          name="{{field.key}}" 
          class="form-control form-control-sm" >
          <option *ngFor="let select of field.options" value={{select.value}}>
            {{select.title}}
          </option>
        </select>
          <div class="row" >
            <div *ngFor="let rule of field.rules" style="font-size:0.6em;">
              {{rule.type + "("+ rule.value+")  ,  " }}
            </div>
          </div>
</div>
          `,
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {
  
  @Input('field') field:any;
  @Input('group') group:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}