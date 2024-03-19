import ArrowLeft from "../icons/ArrowLeft";
import HomeIcon from "../icons/HomeIcon";

export default function FormLogin() {
  return (
    <form className="flex bg-white shadow-2xl rounded-md max-w-2xl min-w-2xl relative">
      <a
        href="/home"
        className="transition absolute -top-4 -right-4 bg-white rounded-full shadow-xl flex justify-center items-center w-12 h-12 hover:scale-110"
      >
        <HomeIcon />
      </a>
      <div className="flex-1 p-6 space-y-6 flex flex-col my-3">
        <h4 className="font-bold text-lg text-downriver-950">¡Bienvenido/a!</h4>
        <p className="font-bold text-lg text-center text-downriver-950">
          <span className="text-sundown-500">Ingrese</span> con su cuenta
        </p>
        <div className="">
          <input
            type="text"
            placeholder="Usuario"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full"
          />
        </div>
        <a
          href=""
          className="text-sundown-500 text-right text-sm font-semibold hover:text-sundown-600"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <button className="btn-bg mx-auto w-36">Ingresar</button>
        <a
          href="/register"
          className="text-center text-downriver-950 font-semibold text-sm hover:text-downriver-900"
        >
          Crear una cuenta
        </a>
      </div>
      <div className="flex-1">
        <img
          src="../../../img/login.jpg"
          alt=""
          className="rounded-r-md min-h-full object-cover"
        />
      </div>
    </form>
  );
}
