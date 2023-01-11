import { useRef, useEffect, useState } from "react";

const SkillCard = (props) => {

    const [visibility,setVisibility] = useState("");
    const [opacity,setOpacity] = useState(0);
    const [top,setTop] = useState("100px");

    const skillCardRef = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setVisibility(entry.isIntersecting);
            
        })
        observer.observe(skillCardRef.current);
       
    },[]);

    useEffect(()=>{
        if(visibility){
            setOpacity(1);
            setTop("0px");
        }
    },[visibility]);



    return ( 
        <div className="skill-card-container" ref={skillCardRef} style={{opacity: opacity, top: top}}>
                <img src={props.info.img} alt="" className="skill-card__img" />
                <h3 className="skill-card__title">{props.info.title}</h3>
                <hr className="skill-card__line" />
                <p className="skill-card__content">{props.info.description}</p>

        </div>
     );
}
 
export default SkillCard;