import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop',
  template: `
  <div class="card mb-2" *ngFor = "let section of config.sections; let i = index">{{section.title}}
    <div class="card-body">

      <div class="container">

        <div class="row  border border-success border-dotted  mb-1"  
        *ngFor = "let row of section.rows; let i = index"
        cdkDropList
        #personList = "cdkDropList"
        [cdkDropListData] = row.fields
        [cdkDropListConnectedTo] = "[userlist]"
        (cdkDropListDropped) = "onDrop($event)" 
        >

          <div class="col-sm" *ngFor = "let field of row.fields; let i = index"
          >
            <span 
              class="badge badge-info"
              cdkDrag
            >{{field.key}}
            </span>
          </div>
 <a (click)="info(row.fields)" class="badge badge-success mr-1 mt-1 mb-1">+</a>




        </div>
      
      </div>

    </div>
  </div>
  <button type="button"  (click)="update()" class="btn btn-primary btn-sm" >Update</button> 
  `,
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {


  @Input('config') config:any

  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

  onDrop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
         moveItemInArray(event.container.data, 
            event.previousIndex, event.currentIndex);
      } else {
         transferArrayItem(event.previousContainer.data,
         event.container.data,
         event.previousIndex,
         event.currentIndex);
      }
   }

   info(field){
     var obj = 
      {
        "label": "codice fiscale",
        "type": "text",
        "key": "codfiscale",
        "defaultValue":"",
        "rules":[
          {'type':"required"},
          {'type':"minLength",'value':16}
        ]
      }
     ;
field.push(obj);
     console.log(field);
   }

   update(){
     console.log(this.config.sections);
   }

}