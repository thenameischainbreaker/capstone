import { Component, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { product } from 'src/product/product.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  providers: [ProductServiceService]
})
export class ProductContainerComponent {
  @Input()prodList: product[] = [];
  constructor(private http:ProductServiceService){
    this.loadProdList();
  }
  loadProdList(){
    //return ProductService.getProducts
    console.log("loadProdList");
    return this.http.getAllProduct().subscribe(data=>{
      console.log(data);
      ProductServiceService.prodList=Object.values(data);
      this.prodList=ProductServiceService.prodList
    },error=>console.log(error));
  }
}
