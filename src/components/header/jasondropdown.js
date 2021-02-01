const clickout=()=> {
	let dropdowns = document.getElementsByClassName("jason-dropdown-content");
	let i;
	  let openDropdown = dropdowns[0];
	  if (openDropdown.classList.contains('jason-dropdown-content')) {                                      
		openDropdown.classList.remove('show')
	  openDropdown.classList.remove('arrow_box2');
	  }
	
  }
const jasondropdown = (e) => {
    return (
        <div id="jasonDropdown" className="jason-dropdown-content">
				<a>option 1</a>
				<a >option 2</a>
				<a >option 3</a>
				<a>option 4</a>
			  </div>
				
    )
}


 
  export default jasondropdown