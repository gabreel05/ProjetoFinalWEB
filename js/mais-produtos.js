var products = [
  [0, 'Ocarina, direito do mundo de zelda', 'img/ocarina.png', false],
  [1, 'Restauração de harpa', 'img/harpa.png', false],
  [2, 'Corda Violino Avulsa', 'img/corda-violino.png', false],
  [3, 'Encordoamento Coloridas Violão', 'img/cordas-violao.png', false],
  [4, 'Reforma de pianos', 'img/reforma-piano.png', false],
  [5, 'Personalizamos seu violino', 'img/persona-violino.jpg', false],
  [6, 'Cordas De Guitarra', 'img/corda-guitarra.png', false],
  [7, 'Guitarra Elétrica', 'img/guitarra.jpg', false],
  [8, 'Contrabaixo', 'img/contrabaixo.jpg', false],
  [9, 'Bateria acústica', 'img/bateria.jpg', false],
  [10, 'Teclado sintetizador', 'img/teclado.jpg', false],
  [11, 'Violão acústico', 'img/violao.jpg', false]
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
    content += `<img src="../${products[i][2]}" alt="${products[i][2]}" />`
    content += '</div>'
    content += `<div id="card-description">${products[i][1]}</div>`

    if (products[i][3] == false) {
      content +=
        '<div id="card-buy" onclick="buy(' + products[i][0] + ')">Comprar</div>'
    } else {
      content += '<div id="cart-product">Adicionado ao carrinho</div>'
    }
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
