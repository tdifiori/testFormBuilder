
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../../../../interface/control';

@Component({
  selector: 'app-button-end-form',
  template: `
  <div class="col" [formGroup]="group" >
    <button 
      [disabled]="group.invalid" 
      type="{{config.type}}"  
      class="btn btn-primary"
      name="{{config.key}}"
       
    >Invia
    </button> 

   Status: {{ group.status }}

    <div class="row mt-3">
      <div class="alert alert-success" role="alert">
        form value: <pre><code>{{ group.value | json }}</code></pre>
      </div>
    </div>

  </div>    
  `,
  styleUrls: ['./button-end-form.component.css']
})
export class ButtonEndFormComponent implements controlsProps {
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}