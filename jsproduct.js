let product={
    id: 101,
    name:"Duster",
    price:2000,
    quantity: 2,
    total : function(){
        return this.price*this.quantity;
    },
    update: function(q){
        this.quantity = q;
    },
    display: function(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.price);
        console.log(this.quantity);
        console.log(this.total());
    }
};
product.display();
product.update(5);
console.log();
product.display();