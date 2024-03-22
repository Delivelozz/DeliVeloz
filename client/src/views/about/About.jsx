import { NavLink } from "react-router-dom";
import img1 from "../../assents/images/delivery.png";
import LinkedInIcon from "../../components/icons/LinkedIn";
import GithubIcon from "..//../components/icons/Github";
import imgMaria from "../../assents/Maria.jpg";
import imgJose from "../../assents/Jose.jpg";
import imgSonia from "../../assents/Sonia.jpg";
import imgFede from "../../assents/Fede.jpg";
import imgJodannys from "../../assents/Jodannys.jpg";
import imgAxl from "../../assents/Axl.png";
import imgGaston from "../../assents/Gaston.png";
import imgTobias from "../../assents/Tobias.jpg";

function About() {
  return (
    <section className="container">
      <h3 className="py-2 text-center text-xl font-semibold pb-6">
        <span className="text-sundown-500">Sobre </span>Nosotros
      </h3>

      <img
        className="mx-auto w-21 h-21 rounded-full shadow-xl"
        src={img1}
        alt="imagen circular"
      />

      <div className="rounded-xl px-1 py-1 text-center text-sm focus:outline-sundown-500 rounded mt-10">
        <h1 className="pb-6 text-center text-xl font-semibold">
          Nuestro <span className="text-sundown-500">objetivo</span>
        </h1>
        <p className="text-base">
          Brindar alimentos de alta calidad en un ambiente familiar y cálido.
          Prestar un servicio líder de delivery para llegar a los hogares en
          buen tiempo, manteniendo altos estándares de calidad a nuestros
          clientes, cuidando el talento humano.
        </p>
      </div>

      <div>
        <h2 className="flex justify-center items-center bg-white-200 text-center text-xl font-extrabold py-6">
          Contactos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Maria Romero */}
        <div className="border text-sm py-6 flex items-center justify-center flex-col gap-3 rounded-lg">
          <img className="w-28 h-28 rounded-full" src={imgMaria} />
          <h3 className="font-semibold text-center text-lg">Maria Romero</h3>
          <div className="flex justify-center items-center gap-3">
            <NavLink
              className="text-lg font-semibold"
              to="https://github.com/Maryxale"
            >
              <GithubIcon />
            </NavLink>
            <NavLink
              className="text-lg font-semibold"
              to="https://www.linkedin.com/in/maria-alejandra-romero-bencomo-44497a123/"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>

        {/* Jose Chapid */}
        <div className="border text-sm py-6 flex items-center justify-center flex-col gap-3 rounded-lg">
          <img className="w-28 h-28 rounded-full" src={imgJose} />
          <h3 className="font-semibold text-center text-lg">Jose Chapid</h3>
          <div className="flex justify-center items-center gap-3">
            <NavLink
              className="text-lg font-semibold"
              to="https://github.com/josechapid"
            >
              <GithubIcon />
            </NavLink>
            <NavLink
              className="text-lg font-semibold"
              to="https://www.linkedin.com/in/jose-luis-chapid-3600bb296/"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>

        {/* Sonia Mendoza</ */}
        <div className="border text-sm py-6 flex items-center justify-center flex-col gap-3 rounded-lg">
          <img className="w-28 h-28 rounded-full" src={imgSonia} />
          <h3 className="font-semibold text-center text-lg">Sonia Mendoza</h3>
          <div className="flex justify-center items-center gap-3">
            <NavLink
              className="text-lg font-semibold"
              to="https://github.com/SoniaMEGS"
            >
              <GithubIcon />
            </NavLink>
            <NavLink
              className="text-lg font-semibold"
              to="https://www.linkedin.com/in/sonia-mendoza-b0b988295/"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>

        {/* Federico Guzman */}
        <div className="border text-sm py-6 flex items-center justify-center flex-col gap-3 rounded-lg">
          <img className="w-28 h-28 rounded-full" src={imgFede} />
          <h3 className="font-semibold text-center text-lg">Federico Guzman</h3>
          <div className="flex justify-center items-center gap-3">
            <NavLink
              className="text-lg font-semibold"
              to="https://github.com/FedeCodeLab"
            >
              <GithubIcon />
            </NavLink>
            <NavLink
              className="text-lg font-semibold2"
              to="https://www.linkedin.com/in/fedecodelab/"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>

        {/* Jodannys Brito */}
        <div className="border text-sm py-6 flex items-center justify-center flex-col gap-3 rounded-lg">
          <img className="w-28 h-28 rounded-full" src={imgJodannys} />
          <h3 className="font-semibold text-center text-lg">Jodannys Brito</h3>
          <div className="flex justify-center items-center gap-3">
            <NavLink
              className="text-lg font-semibold"
              to="https://github.com/jodannys"
            >
              <GithubIcon />
            </NavLink>
            <NavLink
              className="text-lg font-semibold"
              to="https://www.linkedin.com/in/jodannys-brito-6a3b17288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>

        {/* Axl Pacheco */}
        <div className="border text-sm py-6 flex items-center justify-center flex-col gap-3 rounded-lg">
          <img className="w-28 h-28 rounded-full" src={imgAxl} />
          <h3 className="font-semibold text-center text-lg">Axl Pacheco</h3>
          <div className="flex justify-center items-center gap-3">
            <NavLink
              className="text-lg font-semibold"
              to="https://github.com/Laxwip"
            >
              <GithubIcon />
            </NavLink>
            <NavLink
              className="text-lg font-semibold"
              to="https://www.linkedin.com/in/axl-william-pacheco-huan%C3%A9-b1193b24a/"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>

        {/* Gaston Dandrea */}
        <div className="border text-sm py-6 flex items-center justify-center flex-col gap-3 rounded-lg">
          <img className="w-28 h-28 rounded-full" src={imgGaston} />
          <h3 className="font-semibold text-center text-lg">Gaston Dandrea</h3>
          <div className="flex justify-center items-center gap-3">
            <NavLink
              className="text-lg font-semibold"
              to="https://github.com/gastondandrea"
            >
              <GithubIcon />
            </NavLink>
            <NavLink
              className="text-lg font-semibold"
              to="https://www.linkedin.com/in/gastondandrea/"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>

        {/* Tobias Insaurralde */}
        <div className="border text-sm py-6 flex items-center justify-center flex-col gap-3 rounded-lg">
          <img className="w-28 h-28 rounded-full" src={imgTobias} />
          <h3 className="font-semibold text-center text-lg">
            Tobias Insaurralde
          </h3>
          <div className="flex justify-center items-center gap-3">
            <NavLink
              className="text-lg font-semibold"
              to="https://github.com/Tobiinsaurralde"
            >
              <GithubIcon />
            </NavLink>
            <NavLink
              className="text-lg font-semibold"
              to="https://www.linkedin.com/in/tobias-insaurralde-229168297/"
            >
              <LinkedInIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
