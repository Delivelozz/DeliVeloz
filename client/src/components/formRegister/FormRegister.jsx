import HomeIcon from "../icons/HomeIcon";

export default function FormRegister() {
  return (
    <form className="flex bg-white shadow-2xl rounded-md max-w-xl min-w-xl relative">
      <a
        href="/home"
        className="transition absolute -top-4 -right-4 bg-white rounded-full shadow-xl flex justify-center items-center w-12 h-12 hover:scale-110"
      >
        <HomeIcon />
      </a>

      <div className="flex-1 p-6 space-y-6 flex flex-col my-3">
        <h4 className="font-bold text-xl text-center text-downriver-950">
          ¡Crea tu cuenta en
          <span className="text-sundown-500"> DeliVeloz!</span>
        </h4>
        <div className="">
          <label
            htmlFor="usuario"
            className="text-sm font-medium text-sundown-500"
          >
            Usuario:
          </label>
          <input
            type="text"
            name="usuario"
            placeholder="Ingresar usuario"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
          />
          <label
            htmlFor="password"
            className="text-sm font-medium text-sundown-500"
          >
            Correo:
          </label>
          <input
            type="email"
            name="password"
            placeholder="Ingresar correo"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
          />
          <label
            htmlFor="password"
            className="text-sm font-medium text-sundown-500"
          >
            Contraseña:
          </label>
          <input
            name="password"
            type="password"
            placeholder="Ingresar contraseña"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
          />
          <label
            htmlFor="password"
            className="text-sm font-medium text-sundown-500"
          >
            Repetir Contraseña:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Volver a ingresar la contraseña"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full"
          />
        </div>
        <a
          href="/login"
          className="text-sundown-500 text-right text-sm font-semibold hover:text-sundown-700"
        >
          ¿Ya tienes una cuenta?
        </a>
        <button className="btn-bg mx-auto">Registrarse</button>
      </div>
    </form>
  );
}
