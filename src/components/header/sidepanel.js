
 



const sidepanel = ({show,closeNav}) => {
  

  console.log(show)
    return (
        <div id="mySidepanel" className={show?"sidepanel":"sidepanel show_sidepanel"} >
		<a href="#hh" className="closebtn" onClick={closeNav}>×</a>
	  </div>
	  
    )
}

export default sidepanel
