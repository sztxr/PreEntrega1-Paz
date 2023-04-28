/* eslint-disable jsx-a11y/anchor-is-valid */
import CartIcon from './cart-icon.svg'

function CartWidget() {
  return (
    <a className="relative" href="#">
      <img className="w-7" src={CartIcon} alt="Carrito de compras" />
      <span class="absolute -right-2 -top-2 rounded-full bg-lime w-4 h-4 top right text-white text-xs font-bold text-center">
        3
      </span>
    </a>
  )
}
export default CartWidget;