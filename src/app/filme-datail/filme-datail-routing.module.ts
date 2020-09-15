import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeDatailPage } from './filme-datail.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeDatailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeDatailPageRoutingModule {}
