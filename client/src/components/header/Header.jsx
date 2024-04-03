import Cart from "../icons/Cart";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, setUserData } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

export default function Header({ openLoginModal, openRegisterModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  const onClick = () => {
    dispatch(logoutUser());
    dispatch(setUserData({ email: "", password: "" }));
    navigate("/home");
  };

  return (
    <div className="w-full shadow-xl mb-16 sticky top-0 z-40 bg-white">
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

          {/* Header cuando login es false */}

          {!login && (
            <>
              <p
                className="text-sundown-500 hover:text-sundown-400 transition cursor-pointer"
                onClick={openLoginModal}
              >
                Ingresar
              </p>
              <p className="btn-tr cursor-pointer" onClick={openRegisterModal}>
                Registrarse
              </p>
            </>
          )}

          {/* Header cuando login es true */}

          {login && (
            <div>
              {/* <Link to={"/carrito"}>
                <div className="bg-sundown-500 rounded-full p-2 hover:bg-sundown-600">
                  <Cart />
                </div>
              </Link> */}
              <button onClick={onClick} className="btn-tr">
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
