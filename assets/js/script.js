var precio = 400000;
var cantidad = 0;
var precioTotal = precio * cantidad;
var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

var precioTotalSpan = document.querySelector(".valor-total");
precioTotalSpan.innerHTML = precioTotal;

var cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

let sumar = document.querySelector(".sumar");

let restar = document.querySelector(".restar");

sumar.addEventListener("click", () => {
  cantidad += 1;
  cantidadSpan.innerHTML = cantidad;
  precioTotalSpan.innerHTML = cantidad * precio;
});

restar.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad -= 1;
    cantidadSpan.innerHTML = cantidad;
    precioTotalSpan.innerHTML = cantidad * precio;
  }
});
