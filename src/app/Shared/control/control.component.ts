import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
//import { components } from "./hash-map-component";
import { inputConf } from '../../interface/control';


@Component({
  selector: "app-control",
  template: `
<!--    <ng-container *ngFor="let field of config.field" 
     dynamicControl 
     [config]="field"
     [group]="group"
  >
  </ng-container> -->

   <div class="col" *ngFor="let field of config.field">
dfadfasdf
  </div>
  `,
  styleUrls: ["./control.component.css"]
})
export class ControlComponent implements OnInit {
  @Input('field') config: any;
  @Input('group') group: FormGroup;

  constructor() {
    
  }

  ngOnInit() {
    console.log("ddddddd");
  }
}
