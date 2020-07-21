import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { components } from "./hash-map-component";

//import inputConfig from '../../mock/formconfig'

@Component({
  selector: "app-control",
  template: `
  <ng-container *ngFor="let field of fields;" 
     dynamicControl 
  >
  </ng-container> 
  `,
  styleUrls: ["./control.component.css"]
})
export class ControlComponent implements OnInit {
  @Input("field") fields: any;
  @Input("group") group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
