import { Component } from '@angular/core';
import { product } from 'src/product/product.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent {
  prodList: product[] = [new product()];

  loadProdList(){
    //return ProductService.getProducts
  }
}
