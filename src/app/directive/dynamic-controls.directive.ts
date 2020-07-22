import { Directive,OnInit, Input, ComponentFactoryResolver,ViewContainerRef, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../interface/control';


@Directive({
  selector: '[dynamicControl]',
})
export class DynamicControlDirective implements OnInit{
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;

  component: ComponentRef<controlsProps>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }



ngOnInit(){
  console.log("mi torna questo: ",this.config);
}


}