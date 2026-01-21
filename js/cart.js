var Proceed = document.getElementBy("Proceed");
var products = document.getElementsByClassName('product');
var container = document.getElementsByClassName("container");

function Proceed() {
    open("Checkout.html");
}

function remove(button) {

    button.parentNode.remove();

    //  Array.prototype.filter(
    //   products,
    //   (product) => {
    //     removeButton.
    //     product.nodeName === "DIV"

    //  
    //  },
    // );
    container[0].removeChild(product);
}