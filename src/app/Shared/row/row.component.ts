import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-row',
  template: `
    <div class="row">
      <div class="col-md" >
            <app-control *ngFor="let field of fields" [field]=field  [group]="group" ></app-control>
      </div>
    </div>
  `,
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
    @Input('fields') fields:any;
    @Input('group') group:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}