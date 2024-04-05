import Cart from "../icons/Cart";
import HomeIcon from "../icons/HomeIcon";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, setUserData } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import ProductIcon from "../icons/ProductIcon";

export default function Header({ openLoginModal, openRegisterModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.userData);

  console.log("Este es el LocalStore", userData);
  console.log("Estas logeado?", login);
  console.log("Este es el usuario?", user);

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
            <button className="btn-bg flex items-center justify-center gap-2">
              Inicio
            </button>
          </Link>
          <Link to={"/products"} className="flex gap-2">
            <p>Productos</p>
          </Link>
          <Link to={"/about"}>
            <p>Nosotros</p>
          </Link>

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

          {login && (
            <div className=" flex gap-6 items-center ml-3">
              <p className="text-sm text-sundown-500">
                {user.name}
                <span> </span>
                {user.lastName}
              </p>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/derot8znd/image/upload/v1712286915/Otros/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju_g2ngxd.webp"
                  alt=""
                  className="object-cover rounded-full w-10 h-10 min-w-10 min-h-10 -ml-4 cursor-pointer"
                />
                <div className="absolute top-full -left-16 bg-sundown-500 text-white opacity-0 transition-opacity duration-300 text-sm w-40 flex flex-col">
                  <div className="border-b border-wild-watermelon-300">
                    <Link to={"/about"} className="hover:text-white">
                      <p className=" hover:bg-sundown-600 p-2">Ver Perfil</p>
                    </Link>
                  </div>
                  <div className="border-b border-wild-watermelon-300">
                    <Link to={"/about"} className="hover:text-white">
                      <p className=" hover:bg-sundown-600 p-2">admin</p>
                    </Link>
                  </div>
                  <div>
                    <p
                      onClick={onClick}
                      className="cursor-pointer hover:bg-sundown-600 p-2"
                    >
                      Cerrar Sesión
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
