//check if a credit card has a valid number or not
const validateCred = array => {
  let newArray = [array[array.length - 1]];
  for (let i = array.length - 2; i >= 0; i-=2) {
    let doubled = array[i] * 2;
    if (doubled > 9) {
      doubled = doubled - 9;
      newArray.push(doubled);
    } else {
        newArray.push(doubled);
    };
  };
  console.log(newArray);
  let sum = 0;
  for (let j = 0; j < newArray.length; j++) {
    sum += newArray[j];
  };
  if (sum % 10 === 0) {
    return true;
  } else {
      return false;
  };
};

//check if there is/are invalid credit card(s) within a group
const findInvalidCards = nestedarray => {
  let invalidCards = [];
  for (let k = 0; k < nestedarray.length; k++) {
    if (validateCred(nested[k]) === false) {
      invalidCards.push(nested[k]);
    }
  };
  return invalidCards;
};

//tells you invalid credit card(s) Company(ies)
const idInvalidCardCompanies = invalidnestedarray => {
  let invalidCompanies = [];
  for (l = 0; l = invalidnestedarray.length; l++) {
    let firstNumb = invalidnestedarray[l][0];
    switch (firstNumb) {
      case 3: invalidCompanies.push('Amex');
        break;
      case 4: invalidCompanies.push('Visa');
        break;
      case 5: invalidCompanies-push('Mastercard');
        break;
      case 6: invalidCompanies.push('Discover');
        break;
      default: invalidCompanies.push('Company not found');
    };
  };
  return invalidCompanies.filter((a,b) => invalidCompanies.indexOf(a) === b)
};
