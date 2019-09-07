module.exports = class ShoppingCart {

    constructor(){
       this.items = [];
       this.sum = 0;
    }

    addItem(itemname,quantity,price){
        this.items.push({'name':itemname,'quantity':quantity,'pricePerUnit':price});
    }


    getItems(){
        return this.items;
    }

    clear(){
        this.items = [];
    }

    total(){

        this.items.reduce((i,v)=>{
            this.sum += v.quantity * v.pricePerUnit;
        },0);

        return this.sum;

    }

 }