import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../../../interface/control';

@Component({
  selector: 'app-input-radio',
  template: `
<div class="col" [formGroup]="group">    
   <label class="form-check-label">
        <input class="form-check-input" 

          formControlName="{{field.key}}" 
          type="{{field.type}}" 
          name="{{field.key}}"
          value="{{field.value}}" 
        >
        {{field.label}}</label>
</div>        
        `,
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements controlsProps {
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;

  constructor() { }


}