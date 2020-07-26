import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMakerComponent } from './features/form-maker/form-maker.component';

const routes: Routes = [
  {path: 'modificaform', component: FormMakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
