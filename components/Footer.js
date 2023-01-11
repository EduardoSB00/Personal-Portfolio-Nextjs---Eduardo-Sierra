import { useRef, useEffect, useState } from "react";

const Footer = () => {

    const [visibility,setVisibility] = useState("");
    const [opacity,setOpacity] = useState(0);

    const LogoRef = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setVisibility(entry.isIntersecting);
            
        })
        observer.observe(LogoRef.current);
       
    },[]);

    useEffect(()=>{
        if(visibility){
            setOpacity(1);
        }
    },[visibility]);


    return ( 
        <footer className="footer-component">
            <div className="footer-container">
                <img src="/Logo-Full.png" alt="" className="footer__logo" ref={LogoRef} style={{opacity:opacity}} /> 
                <p className="footer__salutation">Gracias por visitar mi portfolio!</p>
                <div className="footer__icons">
                    <a href="https://www.instagram.com/e_sierra57/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/50498517974" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://github.com/EddieSB00" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>

            </div>
        </footer>
     );
}
 
export default Footer;