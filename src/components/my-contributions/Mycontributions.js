import newbtn from "../images/down_arrow.png";
import Modal from "./modal.js"
import style from "./Mycontributions.css"
import {useState} from "react";



const Mycontributions = () => {

const [modalstate,modalchange]=useState(true);

const modalFunc=()=>{
modalchange(!modalstate);
}
  
    return (
    <div className="main-rect">
      <div className="rectangle">
        
          <h2 className="my_contri">My contributions</h2>
          <h6 className="below-text">view your documents, blsogposts, tools, and dev journey u've created here</h6>
      </div>
      <button id="myBtn" className="new" onClick={modalFunc} >+New<img src={newbtn}/></button>
      <Modal state={modalstate} closemodal={modalchange}/>
      
  </div>
    )
}

export default Mycontributions
