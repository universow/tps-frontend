import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { runInThisContext } from 'vm';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../service/user';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.sass'
})

export class User implements OnInit {

  listUser: UserModel [] = [];
  formUser: FormGroup = new FormGroup({});
  isUpdate: boolean = false;
  item: any;

  constructor(private userService: UserService) { }

   ngOnInit(): void {
    this.list();
    this.formUser = new FormGroup({
      cod: new FormControl(''),
      nombre_usuario: new FormControl(''),
      activo: new FormControl(''),
    })    
  }

  list(){
    this.userService.getUsers().subscribe(resp=>{
      if(resp){
        this.listUser = resp;
      }
    });
  }

  save (){
    this.formUser.controls['activo'].setValue('1');
    this.userService.saveUser(this.formUser.value).subscribe(resp=>{
      if(resp)
        this.list();
        this.formUser.reset();
    });
  }

  update (){
    this.userService.updateUser(this.formUser.value).subscribe(resp=>{
      if(resp)
        this.list();
        this.formUser.reset();
    });
  }

  newUser(){
    this.isUpdate=false;
    this.formUser.reset();
  }

   selectedItem(item: any){
    this.isUpdate=true;
    this.formUser.controls['cod'].setValue(item.cod);
    this.formUser.controls['nombre_usuario'].setValue(item.descripcion);
    this.formUser.controls['activo'].setValue(item.activo);
 
  }
  }


