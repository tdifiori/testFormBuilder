import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../../../interface/control';

@Component({
  selector: 'app-input-file',
  template: `
  <div class="col" [formGroup]="group">
    <label >{{config.label}}</label> 
    <input 
    type="{{config.type}}"
    class="form-control-file" 
    formControlName="{{config.key}}" 
    >
  </div>
  `,
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements controlsProps {
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;

  constructor() { }


}