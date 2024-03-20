import { NavLink } from "react-router-dom";
import img1 from "../../assents/images/delivery.png"
import iconGithub from "../../assents/github.png"
import iconLinkedin from "../../assents/linkedin.png"
import imgMaria from "../../assents/Maria.jpg"
import imgJose from "../../assents/Jose.jpg"
import imgSonia from "../../assents/Sonia.jpg"
import imgFede from "../../assents/Fede.jpg"
import imgJodannys from "../../assents/Jodannys.jpg"
import imgAxl from "../../assents/Axl.png"
import imgGaston from "../../assents/Gaston.png"
import imgTobias from "../../assents/Tobias.jpg"

function About() {

  return (

<section className="container">
  <div className= " rounded-lg">
    <h3 className = "py-2 text-wild-watermelon-600 text-center text-2xl font-semibold hover:text-wild-watermelon-600">Sobre Nosotros</h3>
    <img className="mx-auto w-21 h-21 rounded-full border-4 border-sundown-400 " src={img1} alt="imagen circular" />
  </div>
      
  <div className="rounded-xl px-1 py-1 text-center text-sm shadow-md placeholder-gray-500 focus:outline-sundown-500 rounded mt-10">
    <h1 className="py-2 text-wild-watermelon-600 text-center text-2xl font-semibold hover:text-wild-watermelon-600">Nuestro objetivo</h1>
    <p className="text-lg">Brindar alimentos de alta calidad en un ambiente familiar y cálido. 
        Prestar un servicio líder de delivery para llegar a los hogares en buen tiempo, 
        manteniendo altos estándares de calidad a nuestros clientes, cuidando el talento humano</p>
  </div>
  
  <div>
  <h2 className="flex justify-center items-center h-32 bg-white-200 text-wild-watermelon-500 text-center text-2xl font-extrabold mt-1 mb-2">Contactos</h2>
  </div>

  <div className="flex mb-8">  
    {/* Maria Romero */}
    <div className="border p2 shadow-2xl text-sm rounded-3xl mx-1">
      <img className="w-28 h-28 rounded-full mr-4 ml-2 mt-2 mb-2 justify-center" src={imgMaria}/>
      <h3 className="font-semibold text-center text-md mb-2">Maria Romero</h3>
      <div className="flex">
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://github.com/Maryxale">
          <img className="w-10 h-10 rounded-full mr-4  ml-2 bg-sundown-500" src={iconGithub} alt=""/>
        </NavLink>
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://www.linkedin.com/in/maria-alejandra-romero-bencomo-44497a123/">
          <img className="w-10 h-10 rounded-full mr-4 bg-sundown-500" src={iconLinkedin} alt=""/>
        </NavLink>
      </div>
    </div>

    {/* Jose Chapid */}
    <div className="border p2 shadow-2xl text-sm rounded-3xl mx-1">
      <img className="w-28 h-28 rounded-full mr-4 ml-2 mt-2 mb-2 justify-center" src={imgJose}/>
      <h3 className="font-semibold text-center text-md mb-2">Jose Chapid</h3>
      <div className="flex">
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://github.com/josechapid">
          <img className="w-10 h-10 rounded-full mr-4  ml-2 bg-sundown-500" src={iconGithub} alt=""/>
        </NavLink>
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://www.linkedin.com/in/jose-luis-chapid-3600bb296/">
          <img className="w-10 h-10 rounded-full mr-4 bg-sundown-500" src={iconLinkedin} alt=""/>
        </NavLink>
      </div>
    </div>

    {/* Sonia Mendoza</ */}
    <div className="border p2 shadow-2xl text-sm rounded-3xl mx-1">
      <img className="w-28 h-28 rounded-full mr-4 ml-2 mt-2 mb-2 justify-center" src={imgSonia}/>
      <h3 className="font-semibold text-center text-md mb-2">Sonia Mendoza</h3>
      <div className="flex">
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://github.com/SoniaMEGS">
          <img className="w-10 h-10 rounded-full mr-4  ml-2 bg-sundown-500" src={iconGithub} alt=""/>
        </NavLink>
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://www.linkedin.com/in/sonia-mendoza-b0b988295/">
          <img className="w-10 h-10 rounded-full mr-4 bg-sundown-500" src={iconLinkedin} alt=""/>
        </NavLink>
      </div>
    </div>

    {/* Federico Guzman */}
    <div className="border p2 shadow-2xl text-sm rounded-3xl mx-1">
      <img className="w-28 h-28 rounded-full mr-4 ml-2 mt-2 mb-2 justify-center" src={imgFede}/>
      <h3 className="font-semibold text-center text-md mb-2">Federico Guzman</h3>
      <div className="flex">
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://github.com/FedeCodeLab">
          <img className="w-10 h-10 rounded-full mr-4  ml-2 bg-sundown-500" src={iconGithub} alt=""/>
        </NavLink>
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://www.linkedin.com/in/fedecodelab/">
          <img className="w-10 h-10 rounded-full mr-4 bg-sundown-500" src={iconLinkedin} alt=""/>
        </NavLink>
      </div>
    </div>

    {/* Jodannys Brito */}
    <div className="border p2 shadow-2xl text-sm rounded-3xl mx-1">
      <img className="w-28 h-28 rounded-full mr-4 ml-2 mt-2 mb-2 justify-center" src={imgJodannys}/>
      <h3 className="font-semibold text-center text-md mb-2">Jodannys Brito</h3>
      <div className="flex">
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://github.com/jodannys">
          <img className="w-10 h-10 rounded-full mr-4  ml-2 bg-sundown-500" src={iconGithub} alt=""/>
        </NavLink>
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://www.linkedin.com/in/jodannys-brito-6a3b17288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <img className="w-10 h-10 rounded-full mr-4 bg-sundown-500" src={iconLinkedin} alt=""/>
        </NavLink>
      </div>
    </div>

    {/* Axl Pacheco */}
    <div className="border p2 shadow-2xl text-sm rounded-3xl mx-1">
      <img className="w-28 h-28 rounded-full mr-4 ml-2 mt-2 mb-2 justify-center" src={imgAxl}/>
      <h3 className="font-semibold text-center text-md mb-2">Axl Pacheco</h3>
      <div className="flex">
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://github.com/Laxwip">
          <img className="w-10 h-10 rounded-full mr-4  ml-2 bg-sundown-500" src={iconGithub} alt=""/>
        </NavLink>
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://www.linkedin.com/in/axl-william-pacheco-huan%C3%A9-b1193b24a/">
          <img className="w-10 h-10 rounded-full mr-4 bg-sundown-500" src={iconLinkedin} alt=""/>
        </NavLink>
      </div>
    </div>

    {/* Gaston Dandrea */}
    <div className="border p2 shadow-2xl text-sm rounded-3xl mx-1">
      <img className="w-28 h-28 rounded-full mr-4 ml-2 mt-2  mb-2 justify-center" src={imgGaston}/>
      <h3 className="font-semibold text-center text-md mb-2">Gaston Dandrea</h3>
      <div className="flex">
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://github.com/gastondandrea">
          <img className="w-10 h-10 rounded-full mr-4  ml-2 bg-sundown-500" src={iconGithub} alt=""/>
        </NavLink>
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://www.linkedin.com/in/gastondandrea/">
          <img className="w-10 h-10 rounded-full mr-4 bg-sundown-500" src={iconLinkedin} alt=""/>
        </NavLink>
      </div>
    </div>

    {/* Tobias Insaurralde */}
    <div className="border p2 shadow-2xl text-sm rounded-3xl mx-1">
      <img className="w-28 h-28 rounded-full mr-4 ml-2 mt-2 mb-2 justify-center" src={imgTobias}/>
      <h3 className="font-semibold text-center text-md mb-2">Tobias Insaurralde</h3>
      <div className="flex">
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://github.com/Tobiinsaurralde">
          <img className="w-10 h-10 rounded-full mr-4  ml-2 bg-sundown-500" src={iconGithub} alt=""/>
        </NavLink>
        <NavLink className="text-lg font-semibold mx-2 mb-2"  to="https://www.linkedin.com/in/tobias-insaurralde-229168297/">
          <img className="w-10 h-10 rounded-full mr-4 bg-sundown-500" src={iconLinkedin} alt=""/>
        </NavLink>
      </div>
    </div>

  </div>
</section>
  );
}

export default About;