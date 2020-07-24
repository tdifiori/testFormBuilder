import { Directive,OnInit, Input, ComponentFactoryResolver,ViewContainerRef, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { controlsProps, inputConf } from '../interface/control';
// importo l hashMap dei componenti...
import { components } from "../Shared/control/hash-map-component";


@Directive({
  selector: '[dynamicControl]',
})
export class DynamicControlDirective implements OnInit{
  //recupero la porzione di json config, e il formgroup
  @Input('config') config: inputConf;
  @Input('group') group: FormGroup;

  //creo una variabile di tipo component 
  component: ComponentRef<controlsProps>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }



ngOnInit(){
    //instanzio il component scelto dall hashmap passandolo a factory
   const factory = this.resolver.resolveComponentFactory<controlsProps>(
      components[this.config.type]
    );
    // creo il component passando factory, e subito dopo gli passo la
    //config, e il froup di appartenenza.
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;   
}


}