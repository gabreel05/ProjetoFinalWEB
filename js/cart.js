var products = JSON.parse(window.localStorage.getItem('cart'))

window.onload = function () {
  loadCart()
}

function loadCart() {
  document.getElementById('products').innerHTML = ''

  for (var i = 0; i < products.length; i++) {
    var content = ''
    content += '<div id="card">'
    content += '<div id="card-img">'
    content += `<img src="../${products[i][2]}" alt="${products[i][2]}" />`
    content += '</div>'
    content += `<div id="card-description">${products[i][1]}</div>`
    content += '</div>'

    document.getElementById('products').innerHTML += content
  }
}
