import { useState, useRef, useEffect } from "react";

const ProjectComponent = () => {

    const [visibleInfo,setVisibleInfo] = useState(false);
    const[infoHeight,setInfoHeight] = useState(0);
    const[loadHeight,setLoadHeight] = useState(0);

    function handleInformation(){
        if (visibleInfo){
            setVisibleInfo(false);
            setInfoHeight("0px");
            setLoadHeight("0px");
        } else{
            setVisibleInfo(true);
            setInfoHeight("4700px");
            setLoadHeight("400px");
        }
    }

    const [visibility,setVisibility] = useState("");
    const [opacity,setOpacity] = useState(0);
    const [left,setLeft] = useState("-100px");

    const ProjectRef = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setVisibility(entry.isIntersecting);
            
        })
        observer.observe(ProjectRef.current);
       
    },[]);

    useEffect(()=>{
        if(visibility){
            setOpacity(1);
            setLeft("0px");
        }
    },[visibility]);


    return ( 
        <div className="project-component-component" ref={ProjectRef} style={{opacity: opacity, left:left}}>
            <div className="project-component-container">

                <div className="project-component__preview" onClick={handleInformation}>
                    <img src="/Portfolio-Header.png" alt="" className="project-component__pv-img"/>
                    <h3 className="project-component__pv-title">PORTFOLIO</h3>
                    <div className="project-component__pv-load" style={{height: loadHeight}}></div>
                </div>

                
                <div className="project-component__information" style={{height: "auto",maxHeight: infoHeight}}>
                    <h4 className="project-compoonent__information-title">Pagina de Portfolio</h4>
                    <h3 className="project-component__skills-used">HTML CSS & JS | REACT  </h3>
                    <div className="contact__icons">
                        <a href="https://portfolio-eduardo-sierra.web.app" target="_blank"><i className="fa-solid fa-desktop"></i></a>
                        <a href="https://github.com/EduardoSB00/Personal-Portfolio-Eduardo-Sierra" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                    <p className="project-component__brief-description">Esta es la pagina en la que se encuentra en este momento! Su objetivo principal no es mas que exhibir algunos proyectos en los que he trabajado y presentar informacion propia como mis habilidades como desarrollador front end.</p>
                  
                    
                  
                    <div className="project-component__segment">
                        <img src="/Project-Portfolio1.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Fromato Adaptable</p>
                            <p className="project-component__segment-text">Cada parte de la pagina fue diseñada utilizando dimensiones proprocionales al tamaño de la ventana y el uso de las propiedades de flexbox para adaptarse de manera dinamica al tamaño de la ventana o el dispositivo. En el caso de la barra navegadora se implemento un formato distinto para tamaños reducidos utilizando la libreria Media React. En algunos componentes se implementaron media queries para detallar el formato.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Seccion de Habilidades</p>
                            <p className="project-component__segment-text">Se desarrollo un componente sencillo para enlistar las habilidades utilizando posicionamiento relativos para conseguir elementos encima de otros. Finalmente se utilizo un movimiento utilizando la propiedad hover animando el logo cuando se desplaza el cursor.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-Portfolio2.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-Portfolio3.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Seccion de Proyectos</p>
                            <p className="project-component__segment-text">Se presenta una imagen de la pagina principal de cada proyecto realizado sin saturacion. Al desplazar el cursor encima de la imagen se visualiza el titulo del proyecto y el color original de la imagen. Al cliquearla se despliega el resto de la informacion junto con una barra de progreso para apreciar el movimiento de la seccion de informacion.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Informacion de Proyectos</p>
                            <p className="project-component__segment-text">Al cliquear la imagen se despliega informacion sobre diferentes secciones del proyecto seleccionado con informacion sobre su finalidad o las herramientas utilizadas para llevar a cabo la tarea en cuestion. Cada segmento se presenta utilizando flexbox para ordenar facilmente los elementos para dispositivos movil.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-Portfolio4.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-Portfolio5.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Seccion de Contacto</p>
                            <p className="project-component__segment-text">Se presenta la informacion necesaria para entrar en contacto conmigo como numero telefonico y correo electronico. Adicionalmente se encuentra un formulario para mandar un correo de manera expedita directamente a mi correo para obtener una respuesta al correo ingresado.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Uso de React Media</p>
                            <p className="project-component__segment-text">Se uso la libreria React Media que habilita la representacion de ciertos elementos de HTML/JSX unicamente cuando las dimensiones de la pantalla concuerden con las dimensiones establecidas. Esto fue utilizado para la presentacion de los dos tipos barra de navegacion utilizadas.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-Portfolio6.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-Portfolio7.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Uso de HTML semantico</p>
                            <p className="project-component__segment-text">Debido a la simplicidad de la pagina no se dan casos abundantes de estos puntos, pero si se toman en cuenta los elementos HTML 5 como Header, Footer, Nav, Section, etc.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Use State Hook</p>
                            <p className="project-component__segment-text">Se utilizo el hook Use State en varias partes de la pagina para modificar componentes de manera interactiva. La manera mas comun en las que se utilizan es para determinar propiedades de CSS establecidas desde el atributo style dentro del JSX.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-Portfolio8.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
               
                    <div style={{height:150}}></div>

                </div>
                

            </div>
        </div>
     );
}
 
export default ProjectComponent;