class Product {
    constructor(productId, name, price, quantity) {
      this.productId = productId;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    calculateTotalPrice() {
      return this.price * this.quantity;
    }
  }
  
  class PersonalCareProduct extends Product {
    constructor(productId, name, price, quantity, warrantyPeriod) {
      super(productId, name, price, quantity);
      this.warrantyPeriod = warrantyPeriod;
    }
  
    calculateTotalPrice() {
 
      const basePrice = super.calculateTotalPrice();
      const totalPrice = basePrice + this.warrantyPeriod * this.price;
      return totalPrice;
    }
  }
  

  const hairDryer = new PersonalCareProduct('PD123', 'Hair Dryer', 25, 2, 1); // Warranty period: 1 year
  

  const totalPrice = hairDryer.calculateTotalPrice();
  
  console.log("Product : " + hairDryer.name);
  console.log("Total Price (including warranty) : " + totalPrice);
  