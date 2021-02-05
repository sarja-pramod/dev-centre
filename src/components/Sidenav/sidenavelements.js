import proj from '../images/project.png';
import jour from "../images/journey.png";
import events from "../images/events.png";
import access from "../images/access.png";
import contri from '../images/contri.png';
import style from "./Sidenav.css"
import react,{useState} from "react";
const sidelements=[
    {
        id:"vec1",
        class:"vectcolor",
        text:"projects",
        image:proj,
        clicked:false
},
{
        id:"vec2",
        class:"imgvect",
        text:"journey",
        image:jour,
        clicked:false
},
{
    id:"vec3",
    class:"imgvect",
    text:"events",
    image:contri,
    clicked:false
},
{
    id:"vec4",
    class:"imgvect",
    text:"Access control",
    image:events,
    clicked:false
},
{
    id:"vec5",
    class:"imgvect",
    text:"contribution",
    image:access,
    clicked:false
},



]

 const sidenavelements = () => {
    const fun=(index)=>{
        let curr,x,i,y;
        x = document.getElementsByClassName("imgvect");
        y=document.getElementsByClassName("vectcolor");
       
        y[0].className="imgvect";
        document.getElementById(sidelements[index].id).className="vectcolor";
        // for(let i=0;i<sidelements.length;i++){
        //   setclasses(sidelements[index].clicked=false)
        //    console.log(sidelements[i].clicked) 
        // }
        //     setclasses(true);
        //     console.log(sidelements[index].clicked=true);
         }

const [classes,setclasses]=useState({sidelements});
let tru="vectcolor",fal="imgvect";
    return (
    <>
        {sidelements.map((row,index)=>( 
            <div  id={row.id} onClick={()=>fun(index)} className={row.class}><img src={row.image} />	
                <div>{row.text}</div>
            </div>

        ))}
   </>
    )
}

export default sidenavelements
