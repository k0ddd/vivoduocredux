import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  usuario: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state as { user: string };
      this.usuario = state.user || 'Usuario no encontrado';
    }
  }

  goToAsistencia() {
    const navigationExtras = {
      state: {
        user: this.usuario
      }
    };
    this.router.navigate(['/asistencia-registrada'], navigationExtras);
  }






}