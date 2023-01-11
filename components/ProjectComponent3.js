import { useState, useRef, useEffect } from "react";

const ProjectComponent3 = () => {

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
            setInfoHeight("5100px");
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
                    <img src="/Servin-Header.png" alt="" className="project-component__pv-img" />
                    <h3 className="project-component__pv-title">SERVIN</h3>
                    <div className="project-component__pv-load" style={{height: loadHeight}}></div>
                </div>

                
                <div className="project-component__information" style={{height: "auto",maxHeight: infoHeight}}>
                    <h4 className="project-compoonent__information-title">Pagina Oficial de la Empresa Servicios Industriales</h4>
                    <h3 className="project-component__skills-used">HTML CSS & JS | REACT | BOOTSTRAP | SASS </h3>
                    <div className="contact__icons">
                        <a href="https://servin-servicios-industriales.web.app" target="_blank"><i className="fa-solid fa-desktop"></i></a>
                        <a href="https://github.com/EduardoSB00/SERVIN-Servicios-Industriales" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                    <p className="project-component__brief-description">Pagina Oficial de la Empresa SERVIN - Servicios Industriales S de R L. Tiene el proposito de presentar los diferentes servicios que la empresa provee a sus clientes, ademas de dar a conocer su identidad como empresa asi como los resultados de sus obras realizadas. Adicionalmente se agrego la funcionalidad de facilitar la comunicacion entre el personal administrativo y los clientes interesados.</p>
                  
                    
                  
                    <div className="project-component__segment">
                        <img src="/Servin0.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Cartas con Informacion Oculta</p>
                            <p className="project-component__segment-text">Se realizo un componente reutilizable con parametros intercambiables para conseguir una tarjeta que presenta los tres servicios principales de la empresa de una manera dinamica y de facil acceso a su informacion detallada. </p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Animaciones al Observar</p>
                            <p className="project-component__segment-text">Se utilizo la funcion de observador para determinar el punto en que el navegador intercepta los elementos determinados para iniciar una funcion aparte. Esto fue utilizado para realizar cambios en los estilos en linea de los componentes REACT resultando en sutiles animaciones.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Servin1.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Servin2.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Mapa y Filtros de Escala de Grises</p>
                            <p className="project-component__segment-text">Se utilizo el servicio de google maps para conseguir un elemento embedido presentando la direccion geografica de la empresa. Adicionalmente se utilizo el filtro de escala de grises en varias imagenees utilizadas a lo largo del sitio para encajar con la tematica diseñada.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Navegador Bootstrap</p>
                            <p className="project-component__segment-text">Se utilizo la dependencia React-Bootstrap para crear la barra navegadora del sitio. Este permite un cambio al disminuir el tamaño de la ventana o el dispositivo y el uso de menus desplegables. A su vez se utilizo una clase aparte para cambiar el color del navegador segund condiciones de tamaño y la pagina especifica donde se este utilizando.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Servin3.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Servin4.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Cabecera de Pagina</p>
                            <p className="project-component__segment-text">Se realizo un componente reutilizable para conseguir un formato constante a lo largo de la pagina donde solo cambia el contenido y la imagen de fondo seleccionada. Este se ve utilizado en la mayoria de las paginas principales.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Cartas Bootstrap</p>
                            <p className="project-component__segment-text">Se utilizo el formato de carta de bootstrap con algunas modificaciones en los elementos internos y la interaccion con el contenedor para conseguir elementos reutilizables. Estos se encuentran para presentar los grupos de servicios y proyectos. En el caso de los proyectos debido a que se estaran actualizando regularmente, se adiciono una marca en el titulo donde se puede identificar si un proyecto se esta realizando o esta finalizado.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Servin5.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Servin6.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Fonts Awesome</p>
                            <p className="project-component__segment-text">Se uso la libreria de CSS fontsawesome que permite utilizar clases pre-establecidas para generar iconos determinados. Estos se ven utilizados principalmente en la seccion de contacto y la piecera del sitio.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Formulario de Correo</p>
                            <p className="project-component__segment-text">Se utilizo el servicio Emailjs para realizar un formulario capaz de enviar un correo directamente desde la pagina web donde el administrador puede responder inmediatamente si es necesario.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Servin7.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Servin8.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Paginas de Servicio y Proyecto</p>
                            <p className="project-component__segment-text">Se realizo un componente reutilizable utilizando las props de react para llenar todos los campos necesarios. Este a su vez utiliza useParams desde react-router para determinar cual proyecto o servicio se esta solicitando.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Piecera del Sitio</p>
                            <p className="project-component__segment-text">La piecera se encuentra en cada una de las paginas individuales del sitio. Este contiene un enlace a cada una de las paginas principales asi como informacion de contacto y botones de comunicacion rapida para enviar un correo de manera inmediata o acceder al numero de telefono para enviar un mensaje por Whatsapp.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Servin9.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
               
                    <div style={{height:150}}></div>

                </div>
                

            </div>
        </div>
     );
}
 
export default ProjectComponent3;