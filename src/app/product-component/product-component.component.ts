import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
  title: string = 'Product List';
  product:Product={id:'1',name:'iphone',price:1000,quantity:0,like:0,category:{id:'1',name:'phone'}};
  product2:Product={id:'2',name:'iphone',price:2000,quantity:2,like:0,category:{id:'3',name:'phone'}};
 color='red';
 like=0;
  buy(p:Product){
   p.quantity--;
  }

  getColor(){
    return this.getColor;
  }
  liker(p:Product){
   p.like++;
  }
}
