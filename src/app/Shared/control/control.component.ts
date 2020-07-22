import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
//import { components } from "./hash-map-component";
import { inputConf } from '../../interface/control';


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
  styleUrls: ["./control.component.css"]
})
export class ControlComponent implements OnInit {
  @Input('field') config: any;
  @Input('group') group: FormGroup;

  constructor() {
    
  }

  ngOnInit() {
    console.log(this.config);
  }
}
