import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { ProductService } from '../../service/product';
import { FormControl, FormGroup } from '@angular/forms';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.sass'
})

export class Product implements OnInit {

  listProducts: ProductModel [] = [];
  formProduct: FormGroup = new FormGroup({});
  isUpdate: boolean = false;
  item: any;

  constructor(private productService: ProductService) { }

   ngOnInit(): void {
    this.list();
    this.formProduct = new FormGroup({
      codigo: new FormControl(''),
      descripcion: new FormControl(''),
      activo: new FormControl(''),
      cod_usuario: new FormControl(''),
    })    
  }

  list(){
    this.productService.getProducts().subscribe(resp=>{
      if(resp){
        this.listProducts = resp;
      }
    });
  }

  save (){
    this.formProduct.controls['activo'].setValue('1');
    this.productService.saveProduct(this.formProduct.value).subscribe(resp=>{
      if(resp)
        this.list();
        this.formProduct.reset();
    });
  }

  update (){
    this.productService.updateProduct(this.formProduct.value).subscribe(resp=>{
      if(resp)
        this.list();
        this.formProduct.reset();
    });
  }

   delete (codigo: any){
    this.productService.deleteProduct(codigo).subscribe(resp=>{
      if(resp)
        this.list();
    });
  }

  newProduct(){
    this.isUpdate=false;
    this.formProduct.reset();
  }

   selectedItem(item: any){
    this.isUpdate=true;
    this.formProduct.controls['codigo'].setValue(item.codigo);
    this.formProduct.controls['descripcion'].setValue(item.descripcion);
    this.formProduct.controls['activo'].setValue(item.activo);
    this.formProduct.controls['cod_usuario'].setValue(item.cod_usuario);
  
  }
  }


