import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { components } from "./hash-map-component";
import { inputConf } from '../../interface/control';


@Component({
  selector: "app-control",
  template: `
  <ng-container *ngFor="let field of config;" 
     dynamicControl 
     [config]="field"
     [group]="group"
  >
  </ng-container> 
  `,
  styleUrls: ["./control.component.css"]
})
export class ControlComponent implements OnInit {
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
