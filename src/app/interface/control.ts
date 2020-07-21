import { FormGroup } from "@angular/forms";

export interface controlsProps {
  config: inputConf;
  group: FormGroup;
}

export interface inputConf{ 
    label: string;
    type: string;
    key: string;
    defaultValue: string;
    value: string;
    rules: [];
    options: [];
}