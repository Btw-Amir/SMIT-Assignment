apiData();
function apiData() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      for (var i = 0; i < res.length; i++) {
        var product = res[i];
        var container = document.getElementById("container");
        var divElement = document.createElement("div");
        divElement.className = 'box'
        var image = document.createElement("img");
        image.src = product.image;
        image.style.width = '100%'
        image.style.height = '100%'
        var title = document.createElement("h3");
        var price = document.createElement("h4");
        title.innerHTML = product.title;
        price.innerHTML = product.price;
        divElement.append(image)
        divElement.append(title)
        divElement.append(price)
        container.append(divElement)

      }
    });
}
