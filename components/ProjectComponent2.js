import { useState, useRef, useEffect } from "react";

const ProjectComponent2 = () => {
    
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
            setInfoHeight("10000px");
            setLoadHeight("400px");
        }
    }

    const [visibility,setVisibility] = useState("");
    const [opacity,setOpacity] = useState(0);
    const [right,setRight] = useState("-100px");

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
            setRight("0px");
        }
    },[visibility]);

    return ( 
        <div className="project-component2-component" ref={ProjectRef} style={{opacity:opacity, right:right}}>
            <div className="project-component-container">

                <div className="project-component__preview" onClick={handleInformation}>
                    <img src="/Project-ClubSula1.png" alt="" className="project-component__pv-img"/>
                    <h3 className="project-component__pv-title">CLUB SULA</h3>
                    <div className="project-component__pv-load" style={{height: loadHeight}}></div>
                </div>


                <div className="project-component__information" style={{height: "auto",maxHeight: infoHeight}}>
                    <h4 className="project-compoonent__information-title">Pagina Oficial del Club de Tenis de Mesa</h4>
                    <h3 className="project-component__skills-used">HTML CSS & JS | REACT  </h3>
                    <div className="contact__icons">
                        <a href="https://club-de-tenis-de-mesa-sula.web.app" target="_blank"><i className="fa-solid fa-desktop"></i></a>
                        <a href="https://github.com/EduardoSB00/Club-De-Tenis-De-Mesa-Sula" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>

                    
                    <p className="project-component__brief-description">Pagina oficial desarrollada para el Club de Tenis de Mesa Sula con el proposito de exhibir las actividades realizadas dentro del club deportivo, las capacidades de sus miembros activos y aquellos servicios secundarios que ofrecen al publico general. Se hizo enfasis en un diseño adaptable donde los admininstradores de la organizacion puedan actualizar la informacion en la base de datos de manera periodica y la pagina mantenga un formato constante.</p>
                
                    
                
                    <div className="project-component__segment">
                        <img src="/Project-ClubSula1.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Carrusel de Imagenes Personalizado</p>
                            <p className="project-component__segment-text">Se implemento un carrusel personalizado utilizando unicamente CSS y JS directamenete en el componente de react donde este solicita la informacion de los eventos subidos a la base de datos y presenta los tres mas recientes con sus fotos y titulos correspondientes.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Seccion de TOP 10</p>
                            <p className="project-component__segment-text">En la pagina principal se presenta una seccion con los 10 atletas de mayor Ranking a nivel nacional pertenecientes al Club Sula. Este solicita la infomracion de todos los atletas dentro del equipo y luego reutiliza componentes de visualizacion para los atletas para presentarlos en orden de Ranking y con el formato correspondiente a sus categorias.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-ClubSula2.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-ClubSula3.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Pagina del Equipo</p>
                            <p className="project-component__segment-text">La pagina de Equipo presenta seis categorias donde se dividen todos los miembros del Club Sula. Cada miembro se presenta dentro de un componente reutilizable que contiene un fondo intercambiable, el titulo del atelta, su nombre, su numero de ranking, y un color correspondiente a la categoria a la que pertenecen. Cada categoria sera ordenada por numero de Ranking comenzando por el mejor atleta.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Informacion Personal de Miembros</p>
                            <p className="project-component__segment-text">Conforme se van añadiendo miembros a la base de datos del equipo, se generan paginas propias a cada persona con su informacion personal. De manera principal se encuentra la fotografia del atelta con un fondo intercambiable. Se realizo de esta manera para poder cambiar el fondo dependiendo de los patrocinadores actuales del equipo. En el fondo se encuentra el titulo del Atleta. Posteriormente se encuentra la informacion principal de cada atleta seguido de una galeria de fotos personal.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-ClubSula4.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-ClubSula5.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Galeria Personal de Miembros</p>
                            <p className="project-component__segment-text">La pagina administrativa cuenta con la opcion de añadir fotografias a las secciones de cada miembro dentro de la base de datos, estas fotografias se pueden visualizar dentro de la seccion de galeria donde al desplazar el cursor sobre las imagenes estas aumentan en tamaño para facilitar su visualizacion.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Pagina de Eventos</p>
                            <p className="project-component__segment-text">La pagina de eventos muestra todos los eventos añadidos por el personal administrativos en orden de fecha publicada. Estos contienen una fotografia, titulo, subtitulo, fecha de publicacion y el contenido. Los componentes utilizados tienen un formato variable dependiendo del espacio disponible. Los tres eventos mas recientes seran visualizaados en el primer elemento de la pagina principal.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-ClubSula6.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-ClubSula7.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Informacion Individual de Eventos</p>
                            <p className="project-component__segment-text">Con cada evento añadido a la base de datos se genera una nueva pagina donde se puede visualizar con claridad todo el contenido de los eventos redactados. Este formato tambien es utilizado para presentar la informacion de los servicios provistos por el Club Sula con la unica diferencia siendo que los servicios cuentan con una galeria para ejemplificar las actividades realizadas.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                         <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Pagina Acerca De</p>
                            <p className="project-component__segment-text">Se desarrollo una pagina sencilla con la informacion tecnica del club como una organizacion oficial donde se encuentra informacion como su mision, vision, historia y enlaces hacia informacion como sus estatutos y el personal administrativo encargado.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-ClubSula8.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-ClubSula9.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Pagina de Personal</p>
                            <p className="project-component__segment-text">Se reutilizaron los formatos de la pagina de equipo para presentar a los integrantes de la junta directiva y los entrenadores disponibles. Las paginas personales son similares en diseño pero presentan informacion de contacto sin relevancia directa con el deporte.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Pagina de Servicios</p>
                            <p className="project-component__segment-text">Se desarrollo un compoonente reutilizable para enlistar cada uno de los servicios otorgados por el Club Sula con una fotografia, el titulo del servicio, una breve descripcion y el precio si llegase a haber un valor fijo. Estos contienen un enlace a las paginas con toda la informacion necesaria.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-ClubSula10.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-ClubSula11.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Mapa Embedido</p>
                            <p className="project-component__segment-text">Se utilizo un mapa embedido de Google Maps con la direccion hacia el gimnasio donde entrenan los miembros del Club Sula. Este cuenta con la habilidad de establecer una ruta hacia la locacion siempre y cuando el dispositiva tenga acceso a la locacion geografica.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Enviar un Correo</p>
                            <p className="project-component__segment-text">Se realizo un formato para que cualquier usuario pueda enviar un mensaje de manera facil y eficaz donde se ingresa el nombre de la persona, el asunto del mensjae, el contenido y el correo personal del usuario para que el personal administrativo pueda responder cualquier duda o consulta que haya presentado.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-ClubSula12.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>
                    <div className="project-component__segment">
                        <img src="/Project-ClubSula13.png" alt="" className="project-component__segment-img" loading="lazy"/>
                        <div className="project-component__segment-div"></div>
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Pagina de Administracion</p>
                            <p className="project-component__segment-text">Utilizando un enlace especial se puede acceder a una pagina especial utilizada para modificar toda informacion perteneciente a los miembros del equipo, los miembros del personal administrativo y los eventos realizados. Teniendo el enlace primero se presentara con una pagina que solicita una contraseña por parte del usuario. De ser correcta se habilitaran las tres secciones de edicion.</p>
                        </div>
                    </div>
                    <div className="project-component__segment2">
                        <div style={{width: "30vw", minWidth: "310px", justifyContent:"center", display:"flex", flexDirection: "column"}}>
                            <p className="portrait-slide__ocupation">Formatos de Edicion Desplegables</p>
                            <p className="project-component__segment-text">Debido a lo complejo que resulta el manejo de la pagina en su totalidad pero con la finalidad de mantener todo dentro de una sola seccion, se opto por el uso de formatos desplegables. Dentro de cada una de las secciones editables se puede seleccionar uno de tres botones: añadir, borrar o modificar. Al cliquear sobre estos botones el formato correspondiete se desplegara para realizar la accion correspondiente.</p>
                        </div>
                        <div className="project-component__segment-div"></div>
                        <img src="/Project-ClubSula14.png" alt="" className="project-component__segment-img" loading="lazy"/>
                    </div>

                    <div style={{height:150}}></div>

                </div>


            </div>
        </div>
     );
}
 
export default ProjectComponent2;