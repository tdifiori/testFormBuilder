import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { inputConf } from '../../interface/control';

import { InputTextComponent } from './input-text/input-text.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { InputDataComponent } from './input-data/input-data.component';
import { ButtonEndFormComponent } from './buttons/button-end-form/button-end-form.component';
import { InputFileComponent } from './input-file/input-file.component';

@Component({
  selector: "app-control",
  template: `
  <ng-container 
     dynamicControl 
     [config]="config"
     [group]="group"
  >
  </ng-container>
  `,
  styleUrls: ["./control.component.css"],
  entryComponents: [
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent,
    InputDataComponent,
    ButtonEndFormComponent,
    InputFileComponent
]
})
export class ControlComponent implements OnInit {
  @Input('field') config: inputConf;
  @Input('group') group: FormGroup;

  constructor() {
    
  }

  ngOnInit() {
    
  }
}
