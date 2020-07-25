import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { SectionComponent } from './Shared/section/section.component';
import { RowComponent } from './Shared/row/row.component';
import { ControlComponent } from './Shared/control/control.component';
import { InputTextComponent } from './Shared/control/input-text/input-text.component';
import { InputSelectComponent } from './Shared/control/input-select/input-select.component';
import { InputRadioComponent } from './Shared/control/input-radio/input-radio.component';
import { InputDataComponent } from './Shared/control/input-data/input-data.component';
import { ButtonEndFormComponent } from './Shared/control/buttons/button-end-form/button-end-form.component';

import { DynamicControlDirective } from './directive/dynamic-controls.directive';
import { InputFileComponent } from './Shared/control/input-file/input-file.component';



@NgModule({
  declarations: [
    SectionComponent,
    AppComponent,
    RowComponent,
    ControlComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent,
    DynamicControlDirective,
    InputDataComponent,
    ButtonEndFormComponent,
    InputFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
