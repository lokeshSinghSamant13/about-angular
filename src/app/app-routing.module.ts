import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstFormComponent } from './forms/first-form/first-form.component';
import { SecondFormComponent } from './forms/second-form/second-form.component';

const routes: Routes = [
  { path: '', component: FirstFormComponent },
  { path: 'second-form', component: SecondFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
