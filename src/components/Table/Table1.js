import react,{useState} from 'react';
import page1 from '../images/abc.jpg';
import dots1 from "../images/three.jpg";
import json from './jsondata.json';
import data2 from "./showmordata"
import Style from  "./Table.css"


const Table1 = () => {

var j=0;
    function handleclick() {
var i;     
    for(i=0;i<data2.length;i++){
        json1.push(data2[i]);}
    show_more([...json1]);
console.log("jgfd");
      }
   
         const [json1,show_more]=useState(json);

     
    return (

        <>
        <table className="lists" id="lists1">
            <tbody>
            <tr className="list-header">
		<th>DOCUMENT TITLE</th>
		<th>STAGES</th>
		<th>OWNED BY</th>
		<th>LAST EDITED</th>
		<th></th>
		<th></th><th></th>

	</tr>
            {json1.map((row)=>(
                    <tr className="rows">
                    <td className="first">
                        <div className="img11"><img src={page1}/></div>
                        <div>{row.document_title}</div>
                    </td>	
                    <td className="second"> <mark>{row.stages}</mark></td>
                    <td className="second">{row.owned_by}</td>
                    <td className="second">09/20/2020, 06:07am</td>
                    <td className="green-dot1"></td>
                    <td className="second">Published</td>
                    <td><img className="Tdot" src={dots1}/>
                    </td>
                    </tr>
            ))}
            </tbody>
        </table>
        <div className="show-more" onClick={handleclick} >Show more</div>
        </>
    )
}

export default Table1
