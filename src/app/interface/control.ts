import { FormGroup } from "@angular/forms";

export interface controls {
  fieldConfig: field;
  group: FormGroup;
}

export interface field{ 
    label: string;
    type: string;
    key: string;
    defaultValue: string;
    value: string;
    rules: [];
    options: [];
}