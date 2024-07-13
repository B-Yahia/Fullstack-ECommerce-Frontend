const sameAttributes = (attr1, attr2) => {
  for (let i = 0; i < attr1.length; i++) {
    const attrIndex = attr2.findIndex(
      (element) => element.attributeId === attr1[i].attributeId
    );
    if (
      attrIndex === -1 ||
      attr2[attrIndex].attributeItem.id !== attr1[i].attributeItem.id
    ) {
      return false;
    }
  }
  return true;
};

export const findOrderlinesWithSameProduct = (NewOrderline, cart) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === NewOrderline.product.id) {
      if (sameAttributes(cart[i].selectedAttr, NewOrderline.selectedAttr)) {
        return i;
      }
    }
  }
  return -1;
};

export const calculateTheTotalAmount = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].product.prices[0].amount * cart[i].units;
  }
  return parseFloat(total.toFixed(2));
};
