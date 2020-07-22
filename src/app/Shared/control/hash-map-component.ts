import { controlsProps } from '../../interface/control';

import { InputTextComponent } from './input-text/input-text.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { InputDataComponent } from './input-data/input-data.component';
import { Type } from '@angular/core';



export const  components: {[ type: string ]: Type<controlsProps> } = {
  text: InputTextComponent,
  select: InputSelectComponent,
  radio: InputRadioComponent,
  date: InputDataComponent
};
