import proj from '../images/project.png';
import jour from "../images/journey.png";
import events from "../images/events.png";
import access from "../images/access.png";
import contri from '../images/contri.png';
import style from "./Sidenav.css"
const sidelements=[
    {
        id:"vec1",
        class:"vectcolor",
        text:"projects",
        image:proj,

},
{
        id:"vec2",
        class:"imgvect",
        text:"journey",
        image:jour,

},
{
    id:"vec3",
    class:"imgvect",
    text:"events",
    image:contri,

},
{
    id:"vec4",
    class:"imgvect",
    text:"Access control",
    image:events,

},
{
    id:"vec5",
    class:"imgvect",
    text:"contribution",
    image:access,

},



]

 const sidenavelements = () => {
    const fun=(index)=>{
        let curr,x,i,y;
        x = document.getElementsByClassName("imgvect");
        y=document.getElementsByClassName("vectcolor");
       
        y[0].className="imgvect";
        document.getElementById(sidelements[index].id).className="vectcolor";
        
        }
  



    return (
    <>
        {sidelements.map((row,index)=>( 
            <div  id={row.id} onClick={()=>{fun(index);}} className={row.class}><img src={row.image} />	
                <div>{row.text}</div>
            </div>

        ))}
   </>
    )
}

export default sidenavelements
