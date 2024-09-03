  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-asistencia-registrada',
    templateUrl: './asistencia-registrada.page.html',
    styleUrls: ['./asistencia-registrada.page.scss'],
  })
  export class AsistenciaRegistradaPage implements OnInit {
    fecha: string = '';
    hora: string = '';
    
    constructor() { }

    ngOnInit() {
      const now = new Date();
      const utcOffset = -4; 
      const localDate = new Date(now.getTime() + (utcOffset * 60 * 60 * 1000));


      this.fecha = localDate.toISOString().slice(0, 10); 

      this.hora = localDate.toISOString().slice(11, 16)
    }

  }