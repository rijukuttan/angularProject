import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { 
  
  }
 products =[
  { 
    image:"https://m.media-amazon.com/images/I/51Vce6+Qm8L._SX679_.jpg", 
    productName:"5s Gold Compatible with iPhone with 8 Mega Pixel Camera (16GB Internal Memory)",
    price:"20,000"
 },
 { 
  image:"https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UL320_.jpg", 
  productName:"OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)",
  price:"25,000"
},
{ 
  image:"https://m.media-amazon.com/images/I/71UDT0TuNDL._AC_UY218_.jpg", 
  productName:"Redmi Note 11 Pro + 5G (Mirage Blue, 6GB RAM, 128GB Storage) | 67W Turbo Charge | 120Hz Super AMOLED Display | Additional Exchange Offers Available",
  price:"30,000"
}
 ] 
  ngOnInit(): void {
   
  }

}
