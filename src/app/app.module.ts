import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { SectionComponent } from './Shared/section/section.component';
import { RowComponent } from './Shared/row/row.component';
import { ControlInlinTemplateComponent } from './Shared/control/control.component';


@NgModule({
  declarations: [
    SectionComponent,
    AppComponent,
    RowComponent,
    ControlInlinTemplateComponent,
    
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
