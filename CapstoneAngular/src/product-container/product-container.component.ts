import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { product } from 'src/product/product.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  providers: [ProductServiceService]
})
export class ProductContainerComponent {
  prodList: product[] = [];
  constructor(private http:ProductServiceService){
    this.loadProdList();
  }
  loadProdList(){
    //return ProductService.getProducts
    console.log("loadProdList");
    return this.http.getAllProduct().subscribe(data=>{
      console.log(data);
      this.prodList=Object.values(data);
      console.log(this.prodList[1])
    },error=>console.log(error));
  }
}
