var products = [
  [0, 'Caneta com suporte para álcool gel', 'img/caneta.jpg', false],
  [1, 'Limpeza e restauração de clarinete', 'img/clarinete.png', false],
  [
    2,
    'Gaita de fole, limpeza, restauração e produção artesanal',
    'img/gaita.png',
    false
  ],
  [3, 'Xilofone artesal', 'img/xilofone.png', false]
]

var cart = []

window.onload = function () {
  loadProducts()
}

function loadProducts() {
  document.getElementById('products').innerHTML = ''

  for (var i = 0; i < products.length; i++) {
    var content = ''
    content += '<div id="card">'
    content += '<div id="card-img">'
    content += `<img src="./${products[i][2]}" alt="${products[i][2]}" />`
    content += '</div>'
    content += `<div id="card-description">${products[i][1]}</div>`

    // if (products[i][3] == false) {
    //   content +=
    //     '<div id="card-buy" onclick="buy(' + products[i][0] + ')">Comprar</div>'
    // } else {
    //   content += '<div id="cart-product">Adicionado ao carrinho</div>'
    // }
    content += '</div>'

    document.getElementById('products').innerHTML += content
  }
}

function buy(id) {
  products[id][3] = true

  cart.push(products[id])

  window.localStorage.setItem('cart', JSON.stringify(cart))

  loadProducts()
}

function goToCartPage() {
  window.location.href = 'pages/cart.html'
}
