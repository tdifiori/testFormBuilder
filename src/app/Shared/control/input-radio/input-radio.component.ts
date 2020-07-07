import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  template: `
   <label class="form-check-label">
        <input class="form-check-input" 

          formControlName="{{field.key}}" 
          type="{{field.type}}" 
          name="{{field.key}}"
          value="{{field.value}}" 
        >
        {{field.label}}</label>
        `,
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}