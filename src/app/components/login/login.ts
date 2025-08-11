import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login-model';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../service/login';
import { response } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.sass'
})
export class Login implements OnInit {

  listLogin: LoginModel [] = [];
   formLogin: FormGroup = new FormGroup({});
   isUpdate: boolean = false;
   item: any;
   codUsuario: number=0;
   valorPassw: string= '';

  constructor(private loginService: LoginService, private router: Router) { }
 
    ngOnInit(): void {
     this.formLogin = new FormGroup({
       nombre_usuario: new FormControl(''),
       nueva_contrasena: new FormControl(''),
       contrasena: new FormControl(''),
     })    
   }
   
    buscar(nombre_usuario: any){
          this.loginService.getUser(nombre_usuario).subscribe(resp=>{
          const iEdvCrearClave = document.getElementById("dvCrearClave") as HTMLInputElement;    
          const iEdvPassword = document.getElementById("dvPassword") as HTMLInputElement;    
          const iEdvbtnBuscar = document.getElementById("dvbtnBuscar") as HTMLInputElement;  
          const iEdvbtnIngresar = document.getElementById("dvbtnIngresar") as HTMLInputElement;    
           
          
          console.log('activo: ' + resp[0].activo);
          console.log('cambio_pass_ini: ' + resp[0].cambio_pass_ini);
          console.log('cod: ' + resp[0].cod);
          console.log('nombre_usuario: ' + resp[0].nombre_usuario);
          console.log('password: ' + resp[0].password);

          if(resp[0].cambio_pass_ini==0){//Debes cambiar la contraseña
             iEdvCrearClave.style.display='block';
             iEdvbtnBuscar.style.display='none';
          }
          else{
            iEdvCrearClave.style.display='none';
            iEdvPassword.style.display='block';
            iEdvbtnBuscar.style.display='none';
            iEdvbtnIngresar.style.display='block';
            this.valorPassw = resp[0].password;
          }
          this.codUsuario= resp[0].cod;
     });
   }

    savep(cod_usuario: number, nueva_contrasena: string){

      //Validar si las contraseña nueva y la confirnmación son iguales para poder grabar
      //Algoritmo de encriptación para grabar la contraseña
      this.loginService.savep('',this.codUsuario, nueva_contrasena).subscribe(resp=>{
         const inputElement = document.getElementById("dvCrearClave") as HTMLInputElement;      
         const iEdvbtnIngresar = document.getElementById("dvbtnIngresar") as HTMLInputElement;    

      if(resp){
        inputElement.style.display='none';
        iEdvbtnIngresar.style.display='block';
      }
    });
  }

    validarusu(nombre_usuario: string, contrasena: string){
        const iEdError = document.getElementById("dvError") as HTMLInputElement;    
        if (this.valorPassw != contrasena){
             iEdError.style.display='block';
        }
            else{
             iEdError.style.display='none';
             this.router.navigate(['/user']);
            }

              //Ingresa al sistema

      };
       
}
