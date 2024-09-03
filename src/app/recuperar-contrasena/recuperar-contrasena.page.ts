import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  constructor(public alertCrtl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertCrtl.create({
      header: 'CORREO ENVIADO',
      message: 'Se ha enviado un codigo a su correo electronico',
      buttons: ['OK']
    });

    await alert.present();
  }

}
