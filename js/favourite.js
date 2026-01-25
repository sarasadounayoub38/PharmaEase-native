


displayProductsfav();

function displayProductsfav(productName, productPrice, productImage, productDescription) {
    var productLength = localStorage.getItem("j");
    var container = document.getElementById("productsContainer");
    container.innerHTML = "";

    for (var j = 0; j <= productLength; j++) {
        var productName = localStorage.getItem(`${j}productNamefav`);
        var productPrice = localStorage.getItem(`${j}productPricefav`);
        var productImage = localStorage.getItem(`${j}productImagefav`);
        var productDescription = localStorage.getItem(`${j}productDescriptionfav`);
        var card = document.createElement("div");

        card.classList.add('product');

        card.innerHTML = ` <div class="img-container">
               <img src="${productImage}" alt="${productName}">
            </div>
           
            <h4>${productName}</h4>
            <p class="description">${productDescription}</p>
            <div class="price-section">
                <span class="price-label">Price:</span>
                <h3>${productPrice} EGP</h3>
            </div>
            <button class="add-btn" onclick="addToCart('${productName}','${productPrice} EGP','${productImage}','${productDescription}')">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        `;
        container.appendChild(card);

    }

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
