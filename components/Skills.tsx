import SkillCard from "./SkillCard";

const skills = [{
    title: "HTML, CSS & JS",
    img: "/HTML_CSS_JS.png",
    description: "Son las tres herramientas basicas para el desarrollo web donde HTML se utiliza para marcar la disposicion de los elementos de la pagina, CSS se encarga del diseño visual de los elementos y JS habilita todas las necesidades programaticas de la aplicacion. "
},
{
    title: "Bootstrap",
    img: "/Bootstrap.png",
    description: "Es el framework de CSS mas utilizado en el desarrollo de paginas web adaptables al tamaño del visualizador. Este contiene una amplia variedad de clases predefinidas para crear elementos predecibles. Ciertos componentes tambien estan disponibles para conseguir un resultado concreto y de produccion rapida."
},
{
    title: "JQuery",
    img: "/JQuery.png",
    description: "Es una libreria de JS que facilita interactuar con el DOM de las pagina web para apresurar el desarrollo de codigo que manipule los elementos HTML asi como los atributos de CSS."
},
{
    title: "React",
    img: "/React.png",
    description: "Es considerada como una libreria de JS o un framework de trabajo para construir interfaces de usuario basada en el uso de componentes reutilizables escalables para conseguir desarrollos mas rapidos y organizados asi como habilitar varias herramientas propias de la libreria u otras dependecias relacionadas."
},
{
    title: "Sass",
    img: "/Sass.png",
    description: "Es un preprocesador de CSS que admite el uso de herramientas programaticas como variables, ciclos, condiciones, etc. para definir atributos de CSS de una manera mas rapida ademas de simplificar cambios que se deban de realizar a varios elementos de manera simultanea."
},
{
    title: "Firebase",
    img: "/Firebase.png",
    description: "Es una aplicacion provista por Google para el desarrollo de programacion backend que permite herramientas para el desarrollo de aplicaciones web, iOS y Android. Se encuentran herramientas como almacenamiento de datos y archivos, autenticacion, analisis de datos, analisis de rendimiento, etc."
},
{
    title: "NextJs",
    img: "/Next.png",
    description: "Es un framework de react que provee las herramientas para desarrollar aplicaciones web con mayor eficacia. Esta provee una estructura organizada, caracteristicas adicionales como generacion de rutas automaticas, optimizacion de elementos dentro de la aplicacion y la opcion de cargar el codigo de la aplicacion desde el servidor."
}]


const Skills = () => {
    return ( 
        <section className="skills-component">
            <div className="skills-container">
                {
                    skills.map((selectedSkill)=>(
                        <SkillCard info={selectedSkill} key={selectedSkill.title}/>
                    ))
                }
            </div>
        </section>
     );
}
 
export default Skills;