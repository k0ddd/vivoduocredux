import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'recuperar-contrasena',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pagina-docente',
    loadChildren: () => import('./pagina-docente/pagina-docente.module').then( m => m.PaginaDocentePageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'asistencia-registrada',
    loadChildren: () => import('./asistencia-registrada/asistencia-registrada.module').then( m => m.AsistenciaRegistradaPageModule)
  },  {
    path: 'codigoqr',
    loadChildren: () => import('./codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule)
  },
  {
    path: 'resumen-asistencia',
    loadChildren: () => import('./resumen-asistencia/resumen-asistencia.module').then( m => m.ResumenAsistenciaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

