// qty count
let qty1 = 1;
let qty2 = 1;

//price and rate
const basePrise1 = 650;
const basePrise2 = 550;
// const taxRate = 0.1;

// total
let subTotal = 0;
let taxAmount = 0;
let finalTotal = 0;

// utility to update qty
function updateQty(change, productId) {
//   return Math.max(1, qtyVar + change);
    if(productId === 1){
        qty1 = Math.max(1, qty1 + change);
        document.getElementById("qty1").textContent = qty1;
    }else if(productId === 2){
        qty2 = Math.max(1, qty2 + change);
        document.getElementById("qty2").textContent = qty2;
    }
    updatePrice();
}

// calculate price 
function calculatePrice(basePrise, qty){
    return basePrise * qty;
}

//price calculate 
function updatePrice(){
    const totalPrice1 = calculatePrice(basePrise1, qty1);
    const totalPrice2 = calculatePrice(basePrise2, qty2);
    const subTotal = totalPrice1 + totalPrice2;
    // const taxAmount = subTotal * taxRate;
    const finalTotal = subTotal + taxAmount;

    document.getElementById("subTotal1").textContent = `$${totalPrice1.toFixed(2)}`;
    document.getElementById("subTotal2").textContent = `$${totalPrice2.toFixed(2)}`;
    document.getElementById("subTotal").textContent = `$${subTotal.toFixed(2)}`;
    // document.getElementById("taxAmount").textContent = `$${taxAmount.toFixed(2)}`;
    document.getElementById("finalTotal").textContent = `$${finalTotal.toFixed(2)}`;

    // console.log("Sub Total: ", subTotal);
    // console.log("Tax Amount",taxAmount);
    // console.log("Final Total: ",finalTotal);
}

// qty1 = updateQty(1, qty1); //increment qty
// qty2 = updateQty(-1, qty2); //decrement qty

// calculateTotal(); //calculate total after update
updatePrice();