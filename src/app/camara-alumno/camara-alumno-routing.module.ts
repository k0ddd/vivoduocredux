import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraAlumnoPage } from './camara-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraAlumnoPageRoutingModule {}
