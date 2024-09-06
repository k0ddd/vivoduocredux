  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { AlertController } from '@ionic/angular';

  @Component({
    selector: 'app-asistencia-registrada',
    templateUrl: './asistencia-registrada.page.html',
    styleUrls: ['./asistencia-registrada.page.scss'],
  })
  export class AsistenciaRegistradaPage implements OnInit {
    fecha: string = '';
    hora: string = '';
    usuario: string = '';
    
    constructor(private router: Router) { }

    ngOnInit() {
      const now = new Date();
      const utcOffset = -4; 
      const localDate = new Date(now.getTime() + (utcOffset * 60 * 60 * 1000));


      this.fecha = localDate.toISOString().slice(0, 10); 

      this.hora = localDate.toISOString().slice(11, 16)


      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        const state = navigation.extras.state as { user: string };
        this.usuario = state.user || 'Usuario no encontrado';
      }



    }

  }