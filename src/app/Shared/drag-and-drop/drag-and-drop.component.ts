import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop',
  template: `
<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" (click)="showModal()">
  Launch demo modale
</button>


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

          <div class="col-sm" *ngFor = "let field of row.fields; let i = index">
            <span 
              class="badge badge-info"
              cdkDrag
            >{{field.key}}
            </span>
          </div>

            <a 
            (click)="info(row.fields,i)" 
            class="badge badge-success mr-1 mt-1 mb-1"

            >+</a>

        </div>
      
      </div>

    </div>
  </div>
  <button type="button"  (click)="update()" class="btn btn-primary btn-sm" >Update</button> 



<!-- Modal -->
<div class="modal" [class.show]="show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
			</div>
			<div class="modal-body">
				<div class="form-group">
					<div class="input-group">
						<span class="input-group-addon"><label for="editOwnerName">Deployment Name</label></span>
						<input type="text" class="form-control" name="deploymentName" id="deploymentName" [(ngModel)]="deploymentName" placeholder=""
						 autofocus autocomplete="off" />
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="showModal()">Close</button>
				<button type="button" class="btn btn-primary" (click)="fnAddDeploytment()">Save changes</button>
			</div>
		</div>
	</div>
</div>




  `,
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
  
  show: boolean = false;

  @Input('config') config:any

  constructor() {
   
   }

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

   info(field,index){

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

  showModal(){
    this.show = !this.show;
  }


}