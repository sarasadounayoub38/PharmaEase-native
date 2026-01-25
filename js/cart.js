
function Proceed() {
    window.open("Checkout.html");

}


displayProducts();

function displayProducts(productName, productPrice, productImage, productDescription) {
    var productLength = localStorage.getItem("i");
    var container = document.getElementById("productsContainer");
    container.innerHTML = "";
    var totalPrice = 0;
    for (var j = 0; j <= productLength; j++) {
        var productName = localStorage.getItem(`${j}productName`);
        var productPrice = localStorage.getItem(`${j}productPrice`);
        var productImage = localStorage.getItem(`${j}productImage`);
        var productDescription = localStorage.getItem(`${j}productDescription`);
        var card = document.createElement("div");

        card.classList.add('product');

        card.innerHTML = `
            <div class="img-container">
     
                            <img src="${productImage}" alt="${productDescription}">
            </div>
          
            <h4>${productName}</h4>
            <p class="description">${productDescription}</p>
            <div class="price-section">
                <span class="price-label">Price:</span>
                <h3>${productPrice}</h3>
            </div>
            <button class="add-btn" onclick="remove(this)">
                <i class="fas fa-shopping-cart"></i> remove
            </button>
        `;
        container.appendChild(card);
        console.log(productPrice);
        var priceLength = productPrice.length;
        console.log(priceLength)
        var priceNumberType = Number(productPrice.slice(0, priceLength - 4));
        console.log(priceNumberType)
        totalPrice += priceNumberType;
        console.log(totalPrice)
    }
    document.getElementById("totalPrice").innerText = totalPrice;
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
    // container[0].removeChild(product);
}
