import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop',
  template: `
  <div class="card" *ngFor="let section of config; let i=index">
    <div class="card-body">
    
      <span class="badge badge-info">Info</span>

    </div>
  </div>
  `,
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {


  @Input('config') config:any

  constructor() { }

  ngOnInit() {
  }

}