var allProducts = [];
var currentSelectedCategory = "all";

fetchProducts();

function fetchProducts() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/rofiiiee/pharmacy-dataset/main/products.json");
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            allProducts = JSON.parse(request.responseText);
            setupSidebar();
            displayProducts(allProducts);
        }
    }
}

function displayProducts(productsList) {
    var container = document.getElementById("parent");
    container.innerHTML = "";

    for (var i = 0; i < productsList.length; i++) {
        var product = productsList[i];
        var card = document.createElement("div");
        card.classList.add('product');

        card.innerHTML = `
            <div class="img-container">
                <i class="far fa-heart fav-icon" onclick="toggleFav(this)"></i>
                <img src="${product.image}" alt="${product.drugName}">
            </div>
            <div class="product-tags">
                <span class="consume-type-tag">${product.consumeType}</span>
                <span class="category-tag">${product.category}</span>
            </div>
            <h4>${product.drugName}</h4>
            <p class="description">${product.description}</p>
            <div class="price-section">
                <span class="price-label">Price:</span>
                <h3>${product.price} EGP</h3>
            </div>
            <button class="add-btn" onclick="addToCart('${product.drugName}','${product.price} EGP','${product.image}','${product.description}')">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        `;
        container.appendChild(card);
    }
}

function toggleFav(icon) {
    icon.classList.toggle('fas');
    icon.classList.toggle('far');

    icon.style.color = icon.classList.contains('fas')
        ? "#e74c3c"
        : "#888";
}


function setupSidebar() {
    var list = document.getElementById("consumeTypeList");
    var types = [];
    for (var i = 0; i < allProducts.length; i++) {
        var type = allProducts[i].consumeType;
        if (types.indexOf(type) === -1 && type) {
            types.push(type);
            var listItem = document.createElement("li");
            listItem.textContent = type;
            listItem.onclick = (function (t) {
                return function () { filterByCategory(t, this); };
            })(type);
            list.appendChild(listItem);
        }
    }
}

function filterByCategory(category, element) {
    currentSelectedCategory = category;
    var items = document.querySelectorAll("#consumeTypeList li");
    for (var i = 0; i < items.length; i++) { items[i].classList.remove("active"); }
    element.classList.add("active");
    applyFilters();
}

function applyFilters() {
    var searchKey = document.getElementById("search").value.toLowerCase();
    var filtered = allProducts.filter(function (item) {
        var matchesSearch = item.drugName.toLowerCase().indexOf(searchKey) > -1;
        var matchesCategory = (currentSelectedCategory === "all") || (item.consumeType === currentSelectedCategory);
        return matchesSearch && matchesCategory;
    });
    displayProducts(filtered);
}
var i = 0;
function addToCart(productName, productPrice, productImage, productDescription) {
alert("product is saved in cart");
    localStorage.setItem(`${i}productName`, productName);
    localStorage.setItem(`${i}productPrice`, productPrice);

    localStorage.setItem(`${i}productImage`, productImage);
    localStorage.setItem(`${i}productDescription`, productDescription);
    localStorage.setItem(`i`, i);
    i++;
}
