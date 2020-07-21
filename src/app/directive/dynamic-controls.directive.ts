import { Directive,OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { inputConf } from '../interface/control';

@Directive({
  selector: '[dynamicControl]',
})
export class DynamicControlDirective implements OnInit{
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;


  constructor() { }



ngOnInit(){
  console.log("mi torna questo: ");
}


}