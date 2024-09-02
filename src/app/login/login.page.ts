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
      pasword:""
  }

  field:string="";

  constructor(public toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  ingresar(){
    if(this.validateModel(this.login)){
      this.presentToast("Bienvenido "+this.login.Usuario);
      
      let NavigationExtras:NavigationExtras={
        state: {user:this.login.Usuario}
      };
      this.router.navigate(['home'], NavigationExtras);
    } else {
      this.presentToast("falta: "+this.field);
   }
   
  }

  validateModel(model:any){
    for (var [key, value] of Object.entries(model)){
      if (value ==""){
        this.field = key;
        return false;
      }
    }
    return true;
  }
    
    async presentToast(message:string, duration?:number){
      const toast = await this.toastController.create({
        message:message,
        duration: duration ? duration : 2000

      });
    
    }
}

