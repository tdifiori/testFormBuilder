import { Component, OnInit } from '@angular/core';
import fConfig from '../../mock/formconfig';


@Component({
  selector: 'app-form-maker',
  template: `
  <app-drag-and-drop
  [config]="config"
  >
  </app-drag-and-drop>`,
  styleUrls: ['./form-maker.component.css']
})
export class FormMakerComponent implements OnInit {
  config:any;

  constructor() { 
    this.config = fConfig;
  }

  ngOnInit() {
  }

}