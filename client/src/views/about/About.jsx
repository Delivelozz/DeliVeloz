import { NavLink } from "react-router-dom";
import img1 from "../../assents/images/delivery.png"
import iconGithub from "../../assents/github.png"
import iconLinkedin from "../../assents/linkedin.png"

function About() {

  return (
   
    <section className="container">
      <div className= "shadow-md bg-sundown-500 rounded-lg">
        <h3 className = "text-white text-center text-5xl">ABOUT</h3>
        <img className="mx-auto w-21 h-21 rounded-lg" src={img1} alt="" />
     </div>
      
     <div className="border p2 text-sm shadow-md placeholder-gray-500 focus:outline-sundown-500 rounded mt-10  ">
      <h1 className="text-downriver-500 text-center text-2xl font-semibold hover:text-downriver">Nuestro objetivo</h1>
      <p className="text-lg">Brindar alimentos de alta calidad en un ambiente familiar y cálido. 
        Prestar un servicio líder de delivery para llegar a los hogares en buen tiempo, 
        manteniendo altos estándares de calidad a nuestros clientes, cuidando el talento humano</p>
        </div>

    <div className="border p2 text-sm shadow-2xl placeholder-gray-500 focus:outline-sundown-500 rounded mt-10">
      <h2 className="flex justify-center items-center h-32 bg-white-200 text-wild-watermelon-500 text-center text-5xl font-extrabold mt-10">ABOUT US</h2>
      <div className= "shadow-md bg-sundown-500 rounded-lg" >
      <h2 className = "text-white text-center text-4xl" >Ours Github </h2>
      <img className="mx-auto bg-sundown-500 w-20 h-20" src={iconGithub} alt=""/> 
     
      </div>
      <div>
      <NavLink className="text-lg font-semibold mx-2"  to="https://github.com/Maryxale">Maria Romero</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://github.com/FedeCodeLab">Federico Guzman</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://github.com/josechapid">Jose Chapid</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://github.com/SoniaMEGS">Sonia Mendoza</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://github.com/jodannys">Jodannys Brito</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://github.com/Laxwip">William Pacheco</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://github.com/gastondandrea">Gaston Dandrea</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://github.com/Tobiinsaurralde">Tobias Insaurralde</NavLink>

              
    </div>
    <div className= "shadow-md bg-sundown-500 rounded-lg mt-8">
    <h2 className = "text-white text-center text-4xl" >Ours Linkedin </h2>
      <img className="mx-auto bg-sundown-500 w-20 h-20" src={iconLinkedin} alt=""/> 
    </div>

    <div>
      <NavLink className="text-lg font-semibold mx-2"  to="https://www.linkedin.com/in/maria-alejandra-romero-bencomo-44497a123/">Maria Romero</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://www.linkedin.com/in/jose-luis-chapid-3600bb296/">Jose Chapid</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://www.linkedin.com/in/sonia-mendoza-b0b988295/">Sonia Mendoza</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://www.linkedin.com/in/jodannys-brito-6a3b17288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Jodannys Brito </NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://www.linkedin.com/in/axl-william-pacheco-huane-b1193b24a/">William Pacheco</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://www.linkedin.com/in/gastondandrea/">Gaston Dandrea</NavLink>
      <NavLink className="text-lg font-semibold mx-2"  to="https://www.linkedin.com/in/tobias-insaurralde-229168297/">Tobias Insaurralde</NavLink>
              
    </div>
    </div>
    </section>
  );
}

export default About;