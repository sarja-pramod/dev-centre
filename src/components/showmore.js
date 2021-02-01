import react,{useState} from 'react';
import data from "./jsondata.json";
import data2 from "./showmordata";
let  jason=[
    {
      title:"list13",
      document_title:"Pro",
      stages:'<mark>Devolpment</mark>',
      class:'grey-box',
      owned_by: "Veneela Nagabandi",

    
    },
    {
      title:"list14",
      document_title:"proxygen release notes ",
      stages:"...",
      class:'',
      owned_by: "Veneela Nagabandi"
    
      },
      {
        title:"list15",
        document_title:"API Security Workshop",
        stages:"<mark>Design</mark>",
        class:'grey-box',
        owned_by:"ER, Vinay"
      }
]
       /*show more*/




const  show_more=()=> {
  let key;
  for(key=0;key<jason.length;key++)
console.log("yf");
values.push(jason[key]);
   }
  

const showmore = () => {

  const [values,addrows]=useState(0);
values=data;
    return (
        <div className="show-more" onClick={show_more}>Show more</div>
    )
}

export default showmore
