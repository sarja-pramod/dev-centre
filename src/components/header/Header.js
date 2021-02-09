import  D from '../images/dd.png';
import Arrow from '../images/Polygon7.svg';
import Search from '../images/search.png';
import Group from "../images/Group.svg";
import Jasondropdown from "./jasondropdown";
import Lifecycledropdown from "./lifecycledropdown";
import Sidepanel from "./sidepanel";
import Style from "./Header.css"
import {useState} from "react";


const Header = () => {

	const [jasonstate,setjasonstate]=useState(false);
	const jason_menu=()=> {
		setjasonstate(!(jasonstate));
	   }


	 const [lifestate,setlifestate]=useState(false);
	 const life_menu=()=> {
		setlifestate(!(lifestate));
		}

	const[sidepanel,showsidepanel]=useState(true);
	const openNav=()=> {
		showsidepanel(!(sidepanel));
	 }
   

    return (
     
              
	<header className="header"> 
	<Sidepanel show={sidepanel} closeNav={showsidepanel}/>
		<div className="header-part1">
		
			<div className="D"><img src={D}/></div>
			<div className="dev" onClick={()=>openNav()}  > DEV</div>
			<div className="center" onClick={()=>openNav()} >CENTER</div>
		</div>

		<div className="header-part2">
			<div className="header-text" onClick={()=>life_menu()}>Lifecycle<img src={Arrow}/></div>
			
			{lifestate && <Lifecycledropdown/>}

			<div className="header-text">Starter Kits</div> 
			<div className="header-text">Dev journey</div> 
			<div className="header-text">Resources<img src={Arrow}/></div> 
			<div className="header-text">community<img src={Arrow}/></div>
		</div>
		
		<div className="header-part3">
			<div className="jason"><img className="search" src={Search}/></div>
			<div>jason</div>
			<div><img onClick={()=>jason_menu()} className="group"  src={Group}/></div>
        	{jasonstate && <Jasondropdown/>}
		
		</div>
       
		

	
	</header>
    )
}

export default Header
