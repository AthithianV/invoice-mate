function precise(num:number){
        return Number(num.toFixed(2));
}

const calcuateInvoice = (value:number, name:string, prevInvoice:Invoice) => {

    const quantity = name==="quantity" ? value : prevInvoice.quantity;
    const price = name === "price" ? value : prevInvoice.price;
    const discountPercentage=
            name === "discountPercentage" ? value
            : name === "discount" ? precise(value/price*100): prevInvoice.discountPercentage;
    const discount = 
            name === "discount" ? value
            : name === "discountPercentage" ? precise(value*price/100) : prevInvoice.discount
    const taxPercentage= 
            name === "taxPercentage" ? value
            : name === "tax" ? precise(value/price*100) : prevInvoice.taxPercentage
    const tax = name === "tax" ? value
            : name === "taxPercentage" ? precise(value*price/100) : prevInvoice.tax
    const totalPrice = (price*quantity)-(discount*quantity)-(tax*quantity)

    return {
        quantity,
        price,
        discount,
        discountPercentage,
        tax,
        taxPercentage,
        totalPrice
    };
}

export default calcuateInvoice