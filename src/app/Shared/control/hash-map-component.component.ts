import { controls } from '../../interface/control';

import { InputTextComponent } from './input-text/input-text.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputRadioComponent } from './input-radio/input-radio.component';



export const  component: {[ type: string ]: Type<controls> } = {

text: InputTextComponent,
select: InputSelectComponent,
radio: InputRadioComponent

};

