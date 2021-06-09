import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DawarPower Bar';

  inventory = [
    {
      "id": 1,
      "name":"Protein Shake",
      "stock":5,
      "price" : 5.00,
      "image" : 'https://www.bariatriccookery.com/wp-content/uploads/2016/07/Cinnamon-Apple-Spice-Shake.png',
      "featured" : false,
      "qty" : 0,
      "size" : ["Small", "Medium", "Large"]
    },

    {
      "id": 2,
      "name":"Granola Bar",
      "stock":15,
      "price" : 2.50,
      "image" : 'https://www.fieldstonebakery.com/images/snackproducts/downloads/1cc89ea24d37baf474cee9bc8b1cde5b.png',
      "featured" : false,
      "qty" : 0
    },

    {
      "id": 3,
      "name":"Acai Bowl",
      "stock":10,
      "price" : 10.00,
      "image" : 'https://cdn.shopify.com/s/files/1/0252/3833/9670/products/PressedBowls_Original_1440x1440_917caf8e-faad-4df3-8851-ccd5b6494f03.png?v=1594653225',
      "featured" : true,
      "qty" : 0
    }
  ];

proteinSize(inventory: any){
  inventory.price++;
  if(inventory.size = "Small") {
    inventory.price = 5.00;
  }else if(inventory.size = "Medium"){
    inventory.price = 6.00;
  }else if(inventory.size = "Large")
    inventory.price = 7.00;
};

decreaseQty(inventory: any){
inventory.qty--;
if(inventory.qty < 0){
  inventory.qty = 0;
}
}

increaseQty(inventory: any){
  inventory.qty++;
    if(inventory.qty < 0){
      inventory.qty = 0;
      }
  };

totalQty(){
   let total = 0;
   for(const item of this.inventory){
     total += item.qty;
   }
   return total;
  };

totalPrice() {
       let sum = 0;
       for(const item of this.inventory){
        if(item.qty <= item.stock ){
         sum += item.price * item.qty;
     }
    } return sum;

}}
