import { useState } from "react";
import Media from "react-media";

const Navbar = () => {

    const [visibleSideBar, setVisibleSideBar] = useState(false);
    const [slide,setSlide] = useState("-80vw");

    function handleSideBar(){
        if(visibleSideBar){
            setVisibleSideBar(false);
            setSlide("-80vw");
        } else {
            setVisibleSideBar(true);
            setSlide("0px");
        }
    }

    return ( 
        <div className="navbar-component">
            <nav className="navbar-container">

                <a href="">
                    <img className="navbar-logo" src="/Logo.png" alt="" />
                </a>

                <Media query="(min-width: 790px)">
                    <ul>
                        <li>
                            <a href="/" className="navbar-item">Inicio</a>
                        </li>
                        <li>
                            <a href="#personal" className="navbar-item">Personal</a>
                        </li>
                        <li>
                            <a href="#habilidades" className="navbar-item">Habilidades</a>
                        </li>
                        <li>
                            <a href="#projects" className="navbar-item">Proyectos</a>
                        </li>
                        <li>
                            <a href="#contact" className="navbar-item">Contacto</a>
                        </li>
                    </ul>
                
                </Media>
                
                <Media query="(max-width: 790px)">
                    <i onClick={handleSideBar} className="navbar-menu-icon fa-solid fa-bars"></i>
                </Media>
                
            </nav>

            <Media query="(max-width: 790px)">

                <nav className="side-navbar-container" style={{left: slide}}>
                    <ul>
                        <li>
                            <i className="side-navbar-icon fa-solid fa-house"></i>
                            <a href="/" className="side-navbar-item">Inicio</a>
                        </li>
                        <li>
                            <i className="side-navbar-icon fa-solid fa-user"></i>
                            <a href="#personal" className="side-navbar-item">Personal</a>
                        </li>
                        <li>
                            <i className="side-navbar-icon fa-solid fa-star"></i>
                            <a href="#habilidades" className="side-navbar-item">Habilidades</a>
                        </li>
                        <li>
                            <i className=" side-navbar-icon fa-solid fa-rocket"></i>
                            <a href="#projects" className="side-navbar-item">Proyectos</a>
                        </li>
                        <li>
                            <i className="side-navbar-icon fa-solid fa-phone"></i>
                            <a href="#contact" className="side-navbar-item">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </Media>

            

        </div>
     );
}
 
export default Navbar;