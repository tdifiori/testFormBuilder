import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-section',
  template: `
  <div class="card">
    <div class="card-header bg-info" >{{section.title}}</div> 
      <div class="card-body">
        <div class="container">
            <app-row *ngFor="let rows of section.rows" 
              [rows] = rows  
              [group]="group" 
            >
            </app-row>
        </div>
      </div>
  </div>
  <hr>
  `,
  styleUrls: ['./section.component.scss']
})



export class SectionComponent implements OnInit {

  @Input('section') section:any;
  @Input('group') group:FormGroup;

  
 


  constructor() {

   }


  ngOnInit() {

  
  }
 


  
}


