import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-section',
  template: `
  <div class="card">
    <div class="card-header bg-info" >{{config.title}}</div> 
      <div class="card-body">
          <app-row *ngFor="let rows of config.rows" [fields] = rows.fields  [group]="group" ></app-row>
      </div>
  </div>
  <hr>
  `,
  styleUrls: ['./section.component.scss']
})



export class SectionComponent implements OnInit {

  @Input('sectionForm') config:any;
  @Input('group') group:FormGroup;

  
 


  constructor() {

   }


  ngOnInit() {

  
  }
 


  
}


