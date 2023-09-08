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
  @Input()userId: number = 0;
  sortMethods: sortMethods = new sortMethods();
  @Input()currentSortMethod: (a: product, b: product)=>number = this.sortMethods.sortMethods[0];
  constructor(private http:ProductServiceService){
    this.loadProdList();
  }
  loadProdList(){
    //return ProductService.getProducts
    console.log("loadProdList");
    return this.http.getAllProduct().subscribe(data=>{
      console.log(data);
      this.prodList=Object.values(data);
      this.prodList.sort(this.currentSortMethod)
    },error=>console.log(error));
  }
}

export class sortMethods{
  alphaSort = function (a:product,b:product):number
  {
    let prodA=a.p_name.toUpperCase();
    let prodB=b.p_name.toUpperCase();
    if(prodA < prodB)
    {
      return -1;
    }
    else if(prodA > prodB)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

  lowPriceSort = function (a:product,b:product):number
  {
    let prodA=a.p_price;
    let prodB=b.p_price;
    return prodA-prodB;
  }

  highPriceSort = function (a:product,b:product):number
  {
    let prodA=a.p_price;
    let prodB=b.p_price;
    return (prodA-prodB) * -1;
  }

  sortMethods: ((a: product, b: product)=>number)[] = [this.alphaSort, this.lowPriceSort, this.highPriceSort]
}
