import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.onclick = function(event) {
  let modal = document.getElementById("myModal");

  document.getElementById("jasonDropdown").addEventListener('click', function (event) { 

    event.stopPropagation(); 
}); 
document.getElementById("lifeDropdown").addEventListener('click', function (event) { 

  event.stopPropagation(); 
}); 

  if ((!event.target.matches('.header-text')) ) {
    let dropdowns = document.getElementsByClassName("life-dropdown-content");
    let i;
      let openDropdown = dropdowns[0];
      if (openDropdown.classList.contains('life-dropdown-content')) {                                      
        openDropdown.classList.remove('show')
        openDropdown.classList.remove('arrow_box1');
      }
    
  }
 
  if (event.target == modal) {
   
    modal.className="modal"
  }
  if (!event.target.matches('.group')) {
      let dropdowns = document.getElementsByClassName("jason-dropdown-content");
      let i;
        let openDropdown = dropdowns[0];
        if (openDropdown.classList.contains('jason-dropdown-content')) {                                      
          openDropdown.classList.remove('show')
        openDropdown.classList.remove('arrow_box2');
        }
      
    }




}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
