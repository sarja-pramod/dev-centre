import react,{useState} from 'react';
import page1 from '../images/abc.jpg';
import dots1 from "../images/three.jpg";
import initialdata from './jsondata.json';
// import data2 from "./showmordata"
import Style from  "./Table.css"


const Table1 = () => {

    let i;  
    let data2;
   
    fetch('http://localhost:3000/data')
    .then(response=>{
      return response.json();
    })
    .then(users=>{
     // console.log(users);
      data2=users;
    });

    function handleclick() {
       
      

    for(i=0;i<data2.length;i++){
        json1.push(data2[i]);}
    show_more([...json1]);

      }
   
         const [json1,show_more]=useState(initialdata);

     
    return (

        <>
        <table className="lists" id="lists1">
            <tbody>
            <tr className="list-header">
		<th class="first">DOCUMENT TITLE</th>
		<th class="second">STAGES</th>
		<th class="second">OWNED BY</th>
		<th class="second">LAST EDITED</th>
		<th></th>
		<th></th>
        <th></th>

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
                    <td className={row.dot}></td>
                    <td className="second">{row.status}</td>
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
