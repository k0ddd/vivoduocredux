import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaDocentePageRoutingModule } from './pagina-docente-routing.module';

import { PaginaDocentePage } from './pagina-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaDocentePageRoutingModule
  ],
  declarations: [PaginaDocentePage]
})
export class PaginaDocentePageModule {}
