const PortraitSlide = () => {
    return ( 
        <section className="portrait-slide-component">
            
            <div className="portrait-slide__animated-background">
                <div className="animated-square-1"></div>
                <div className="animated-square-2"></div>
                <div className="animated-square-3"></div>
                <div className="animated-square-4"></div>
                <div className="animated-square-5"></div>

            </div>

            <div className="portrait-slide-container">
                <div className="portrait-slide__title">
                    <img className = "portrait-slide__img" src="/Portrait-Img1.png" alt="" />   
                    <h2 className="portrait-slide__name">EDUARDO</h2>
                    <h2 className="portrait-slide__name">SIERRA</h2>
                    <div className="portrait-slide__icons">
                        <a href="https://www.instagram.com/e_sierra57/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/50498517974" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://github.com/EduardoSB00" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                    <div className="portrait-slide__detail"></div>
                    
                </div>

                <div className="portrait-slide__info">
                    <p className="portrait-slide__ocupation">Desarrollador Web</p>
                    <p className="portrait-slide__ocupation-description">Desarrollador front end ubicado en Honduras, enfocado en React para crear componentes adaptables y reutilizables.</p>
                    <p className="portrait-slide__small-hook">Conseguir resultados precisos de la manera mas sencilla siempre deberia ser la prioridad. Mis habilidades aseguran una integracion adecuada para cualquier equipo.</p>

                    <p className="portrait-slide__contact">emsierra00@gmail.com</p>
                    <p className="portrait-slide__contact">+504 9851-7974</p>
                </div>

            </div>
        </section>
     );
}
 
export default PortraitSlide;