const menu = {
  _meal: '',
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    } else {
    console.log('Insert a valid meal name');
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    } else {
      console.log('Insert a valid price');
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for Eur. ${this._price}`;
      } else {
          return 'Meal or price was not set correctly!';
      }
    }
};

menu.meal = ''; //insert your dish
menu.price = ; //insert the price

console.log(menu.todaysSpecial);
