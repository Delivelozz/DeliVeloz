import HomeIcon from "../icons/HomeIcon";

export default function FormRegister() {
  return (
    <form className="flex bg-white shadow-2xl rounded-md max-w-xl min-w-xl relative">
      {/* ------------------ Boton de Home -------------------- */}

      <a
        href="/home"
        className="transition absolute -top-4 -right-4 bg-white rounded-full shadow-xl flex justify-center items-center w-12 h-12 hover:scale-110"
      >
        <HomeIcon />
      </a>
      {/* ------------------ Formulario --------------------- */}

      <div className="flex-1 p-6 space-y-6 flex flex-col my-3">
        <h4 className="font-bold text-xl text-center text-downriver-950">
          ¡Crea tu cuenta en
          <span className="text-sundown-500"> DeliVeloz!</span>
        </h4>
        <div>
          <div className="flex gap-10">
            {/* ------------------ Nombre y Apellido --------------------- */}

            <div className="flex-1">
              <label
                htmlFor="nombre"
                className="text-sm font-medium text-sundown-500"
              >
                *Nombre:
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="apellido"
                className="text-sm font-medium text-sundown-500"
              >
                *Apellido:
              </label>
              <input
                type="text"
                name="apellido"
                placeholder="Ingrese su apellido"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
              />
            </div>
          </div>

          {/* ------------------ Email --------------------- */}

          <label
            htmlFor="email"
            className="text-sm font-medium text-sundown-500"
          >
            *Correo:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ingresar correo"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
          />

          {/* ------------------ Número de telefono --------------------- */}

          <label
            htmlFor="phone"
            className="text-sm font-medium text-sundown-500"
          >
            Número de Teléfono:
          </label>
          <input
            type="phone"
            placeholder="Ingrese su número de teléfono:"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
          />

          {/* ------------------ Contraseña --------------------- */}

          <div className="flex gap-10">
            <div className="flex-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-sundown-500"
              >
                *Contraseña:
              </label>
              <input
                name="password"
                type="password"
                placeholder="Ingresar contraseña"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-sundown-500"
              >
                *Repetir Contraseña:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Volver a ingresar la contraseña"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full"
              />
            </div>
          </div>
        </div>

        {/* ------------------ Boton de Login --------------------- */}

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
