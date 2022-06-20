import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductService } from 'src/app/services/product.service';
import { Unitprice } from 'src/app/models/unitprice';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  kgPrice: Unitprice = {
    price: 500
  }

  products: Products = {
    name: "",
    desc: "",
    weight: Number,
    price: Number,
    mfd: "",
    dld: "",
  }

  constructor(private svc: ProductService) { }

  ngOnInit(): void {
    const allProducts = () => {
      this.svc.getAll
    }
  }

  setter(){
   const amt = this.products.price;
    const unit: any = this.kgPrice;
    const price = (amt: any) => {
      let weight = unit / amt
      this.products.weight = weight
    }

    price(amt);

  }

  addProduct(){
    let num;
    const product = {
      name: this.products.name,
      desc: this.products.desc,
      weight: this.setter(),
      price: this.products.price,
    }

  this.svc.createProduct(product);
  }

}
