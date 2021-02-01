import  D from '../images/dd.png';
import Arrow from '../images/Polygon7.svg';
import Search from '../images/search.png';
import Group from "../images/Group.svg";
import Jasondropdown from "./jasondropdown";
import Lifecycledropdown from "./lifecycledropdown";
import Sidepanel from "./sidepanel";
import Style from "./Header.css"


const jason_menu=()=> {
    document.getElementById("jasonDropdown").classList.toggle("arrow_box2");
    document.getElementById("jasonDropdown").classList.toggle("show");
  }

  const life_menu=()=>{
		document.getElementById("lifeDropdown").classList.toggle("arrow_box1");
		document.getElementById("lifeDropdown").classList.toggle("show");
  }

  const openNav=()=> {
    document.getElementById("mySidepanel").className="sidepanel show_sidepanel";
   
 }



const Header = () => {
    return (
     
              
	<header className="header"> 
	  <Sidepanel/>
		<div className="header-part1">
		
			<div className="D"><img src={D}/></div>
			<div className="dev" onClick={openNav}  > DEV</div>
			<div className="center" onClick={openNav} >CENTER</div>
		</div>
			<div className="header-part2">
			<div className="header-text" onClick={life_menu}>Lifecycle<img src={Arrow}/></div>
			
			
			<Lifecycledropdown/>


  
			<div className="header-text">Starter Kits</div> 
			<div className="header-text">Dev journey</div> 
			<div className="header-text">Resources<img src={Arrow}/></div> 
			<div className="header-text">community<img src={Arrow}/></div>
		</div>
		<div className="header-part3">
			<div className="jason"><img className="search" src={Search}/></div>
			<div>jason</div>
			<div><img onClick={jason_menu} className="group" src={Group}/></div>
            <Jasondropdown/>
			

		</div>
       
		

	
	</header>
    )
}

export default Header
