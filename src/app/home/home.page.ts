import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state as { user: string };
      this.usuario = state.user || 'Usuario no encontrado';
    }
  }

  goToAlumno() {
    const navigationExtras = {
      state: {
        user: this.usuario
      }
    };
    this.router.navigate(['/alumno'], navigationExtras);
  }

  goToPaginaD() {
    const navigationExtras = {
      state: {
        user: this.usuario
      }
    };
    this.router.navigate(['/pagina-docente'], navigationExtras);
  }

}


