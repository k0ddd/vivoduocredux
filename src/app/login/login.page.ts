import { Component, OnInit } from '@angular/core';
import { NumericValueAccessor, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

      login:any={
      usuario:"",
      password:""
  }

  field:string="";

  constructor(public toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  ingresar(){
  
    if(this.validateModel(this.login)){
      if (this.validateLongUsuario(this.login.usuario)){
        if(this.validateLongPass(this.login.password)){
          this.presentToast("Bienvenido "+this.login.usuario);
          let navigationExtras:NavigationExtras={
            state: {user:this.login.usuario} 
          }
          this.router.navigate(['home'],navigationExtras);
        }else{
          this.presentToast("La contraseña debe ser de largo 4 y solo numerica");
          this.login.password="";
        }
      }else{
        this.presentToast("El largo del usuario debe ser entre 3 y 8 caracteres");
        this.login.usuario="";
      }
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }

  validateModel(model:any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante

      if (value=="") {
        // Se asigna el campo faltante
        this.field=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }

  validateLongUsuario(dato:string){
    if(dato.length>=3 && dato.length<=8){
      return true
    }
    return false;
  }
  validateLongPass(dato:string){
    if(dato.length>=3 && dato.length<=8){
      return true;
    }
    return false;
  }
    
  /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
}

