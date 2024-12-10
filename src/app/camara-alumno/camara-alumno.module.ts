import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraAlumnoPageRoutingModule } from './camara-alumno-routing.module';

import { CamaraAlumnoPage } from './camara-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraAlumnoPageRoutingModule
  ],
  declarations: [CamaraAlumnoPage]
})
export class CamaraAlumnoPageModule {}
