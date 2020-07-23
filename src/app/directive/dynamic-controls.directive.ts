import { Directive,OnInit, Input, ComponentFactoryResolver,ViewContainerRef, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../interface/control';
import { components } from "../Shared/control/hash-map-component";


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
   const factory = this.resolver.resolveComponentFactory<controlsProps>(
      components[this.config.type]
    );
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;   

}


}