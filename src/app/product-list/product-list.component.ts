import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  product:Product;
  dataform:Product = new Product()
  constructor(
    private ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.ProductService.getProducts().subscribe(data=>{
      this.products = data
    })
  }
  removeProduct(id:number){
    this.ProductService.removeProduct(id).subscribe(response=>{
      this.products = this.products.filter(product => product.id !=response.id);
      
    })
  }
  detail(id:number){
    this.ProductService.getProduct(id).subscribe(data=>{
      this.product = data
    })
  }

}
