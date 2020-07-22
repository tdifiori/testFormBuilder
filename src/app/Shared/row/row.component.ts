import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-row',
  template: `
  <div class="row">
    <app-control *ngFor="let field of row.fields" 
      [field]="field"  
      [group]="group" 
    >
    </app-control>
  </div>
  `,
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
    @Input('row') row:any;
    @Input('group') group:FormGroup;

  constructor() { }


  ngOnInit() {
   
  }

}