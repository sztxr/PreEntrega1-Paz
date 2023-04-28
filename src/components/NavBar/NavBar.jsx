/* eslint-disable jsx-a11y/anchor-is-valid */
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center sticky inset-0 z-10 h-max max-w-full shadow shadow-gray-200 py-2 px-4">
      <a className="text-3xl font-bold underline transition ease-in-out" href="#">Petra</a>
      <ul className="flex justify-between items-center relative">
        <a className="px-8 hover:text-lime transition ease-in-out" href="#"><li>Plantas</li></a>
        <a className="px-8 hover:text-lime transition ease-in-out" href="#"><li>Macetas</li></a>
        <a className="px-8 hover:text-lime transition ease-in-out" href="#"><li>Accesorios</li></a>
      </ul>
      <CartWidget />
    </nav>
  )
}
export default NavBar;