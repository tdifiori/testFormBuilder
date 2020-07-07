import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { SectionComponent } from './Shared/section/section.component';
import { RowComponent } from './Shared/row/row.component';
import { ControlInlinTemplateComponent } from './Shared/control/control.component';
import { InputTextComponent } from './Shared/control/input-text/input-text.component';
import { InputSelectComponent } from './Shared/control/input-select/input-select.component';
import { InputRadioComponent } from './Shared/control/input-radio/input-radio.component';


@NgModule({
  declarations: [
    SectionComponent,
    AppComponent,
    RowComponent,
    ControlInlinTemplateComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent
    
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
