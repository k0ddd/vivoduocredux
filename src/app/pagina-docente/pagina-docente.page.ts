import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-docente',
  templateUrl: './pagina-docente.page.html',
  styleUrls: ['./pagina-docente.page.scss'],
})
export class PaginaDocentePage implements OnInit {
  usuario: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state as { user: string };
      this.usuario = state.user || 'Usuario no encontrado';
    } else {
      this.usuario = 'Usuario no encontrado';
    }
  }
}
