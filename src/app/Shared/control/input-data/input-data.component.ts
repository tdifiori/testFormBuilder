import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../../../interface/control';


@Component({
  selector: 'app-input-data',
  template: `
        <div  class="col" [formGroup]="group">
        <label>{{ config.label }}</label>
        <input
          [ngClass]="{
            'is-invalid': group.controls[config.key].status === 'INVALID',
            'is-valid': group.controls[config.key].status === 'VALID'
          }"
          formControlName="{{ config.key }}"
          type="{{ config.type }}"
          name="{{ config.key }}"
          class="form-control form-control-sm"
          placeholder="{{ config.label }}"
        />
        <div class="row" style="font-size:0.6em;">
          <div *ngFor="let rule of config.rules">
            {{ rule.type + "(" + rule.value + ")  ,  " }}
          </div>
        </div>
      </div>
  `,
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements  controlsProps {
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;

  constructor() { }


}