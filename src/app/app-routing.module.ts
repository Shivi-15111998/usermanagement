import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormControlName } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:ListComponent},
  {path:"list",component:ListComponent},
  {path:"form",component:FormComponent},
  {path:"update/:id",component:UpdateComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
