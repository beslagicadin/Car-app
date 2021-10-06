import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: CarListComponent},
  {path: 'edit', component: FormComponent},
  {path: 'edit/:id', component: FormComponent },
  {path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
