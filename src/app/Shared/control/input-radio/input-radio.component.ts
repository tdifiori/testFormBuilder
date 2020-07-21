import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../../../interface/control';

@Component({
  selector: 'app-input-radio',
  template: `
<div class="col" [formGroup]="group">    
   <label class="form-check-label">
        <input class="form-check-input" 

          formControlName="{{config.key}}" 
          type="{{config.type}}" 
          name="{{config.key}}"
          value="{{config.value}}" 
        >
        {{config.label}}</label>
</div>        
        `,
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements controlsProps {
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;

  constructor() { }


}