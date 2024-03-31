const orderingPriceController = (results, price) =>{
    let orderingPrice = [];
    if(price === "asc"){
        orderingPrice = results.sort((a, b)=> a.price - b.price);
    }else{
        orderingPrice = results.sort((a, b)=> b.price - a.price);
    }
    return orderingPrice;
}

module.exports = orderingPriceController