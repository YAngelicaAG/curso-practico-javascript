const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

const coupons = [
  {
      name: "Cupon1",
      discount: 15,
  },
  {
      name: "Cupon2",
      discount: 30,
  },
  {
      name: "Cupon3",
      discount: 25,
  },
];

function onClickBtnPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice").value;
  const inputCupon = document.getElementById("inputCupon").value;

  const isValid = function(coupon) {
    return coupon.name === inputCupon;
  };

  const userCoupon = coupons.find(isValid);

  if(!userCoupon) {
    resultp.innerText = "El cupon no es valido";
  }

  else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
    const resultp = document.getElementById("resultPrice");
    resultp.innerText = "El precio con el descuento del cupon es de: $" + precioConDescuento
  }
}
