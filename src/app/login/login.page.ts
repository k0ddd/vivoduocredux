import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  ingresar(){
    console.log("estoy en el metodo ingresar")
    console.log(this.login.usuario);
    console.log(this.validarModel(this.login));
  }

  validarModel(model:any){
    
    if (model.usuario==""){
      return "usuario vacio";
    }else if (model.password==""){
      return "password vacio";
    }else return "campos completos";
  }

}
