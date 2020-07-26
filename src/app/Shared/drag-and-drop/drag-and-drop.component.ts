import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop',
  template: `
  <div class="card mb-2" *ngFor = "let section of config.sections; let i = index">{{section.title}}
    <div class="card-body">

      <div class="container">
        <div class="row  border border-success border-dotted  mb-1"  
        *ngFor = "let row of section.rows; let i = index">

          <div class="col-sm" *ngFor = "let field of row.fields; let i = index">
            <span 
              class="badge badge-info"
            >{{field.key}}
            </span>
          </div>

        </div>
        
      </div>






    </div>
  </div>
  `,
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {


  @Input('config') config:any

  constructor() { }

  ngOnInit() {
    console.log(this.config.sections);
  }

}