'use strict';

class Person {
    constructor(firstName, lastName, phoneNumber, email, homeAdress){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.homeAdress = homeAdress;
    }
  }

  class Goods {
      constructor(goodsName, descripton, price) {
          this.goodsName = goodsName;
          this.descripton = descripton;
          this.price = price;
      }  
  }

  class Favourites extends Goods {
    constructor(goodsName, descripton, price){
        super(goodsName, descripton, price)
    }
  }

  class PopularGoods extends Goods {
    constructor(goodsName, descripton, price){
        super(goodsName, descripton, price)
    }
  }
  
  class Cart {
      constructor(goods, price, totalPrice) {
          this.goods = goods;
          this.price = price;
          this.totalPrice = totalPrice; //Maybe total price is something that we coud math with methods
      }
  }

  class Searchline {
      constructor(serchline){
          this.serchline = serchline;
      }
  }

  class CurrentTown {
      constructor(location) {
          this.location = location;
      }
  }

  class Order {
      constructor(currentOrder, previousOrder) {
          this.currentOrder = currentOrder;
          this.previousOrder = previousOrder;
      }
  }
