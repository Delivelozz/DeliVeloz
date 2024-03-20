import { Link } from "react-router-dom";
import Carrito from "../icons/Carrito";

export default function Header() {
  return (
    <div className="w-full shadow-xl mb-16 sticky top-0 z-50 bg-white">
      <div className="container flex py-4 items-center justify-between">
        <div>
          <Link to={"/home"}>
            <h1 className="text-sundown-500 tracking-wide font-bold hover:text-sundown-400 transition">
              DeliVeloz
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <Link to={"/home"}>
            <button className="btn-bg">Inicio</button>
          </Link>
          <Link to={"/products"}>
            <p>Productos</p>
          </Link>
          <Link to={"/about"}>
            <p>Nosotros</p>
          </Link>
          <Link to={"/login"}>
            <p className="text-sundown-500 hover:text-sundown-400 transition">
              Ingresar
            </p>
          </Link>
          <Link to={"/register"}>
            <button className="btn-tr">Registrarse</button>
          </Link>
          <Link to={"/cart"}>
            <div className="bg-sundown-500 rounded-full p-2 hover:bg-sundown-600">
              <Carrito />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
