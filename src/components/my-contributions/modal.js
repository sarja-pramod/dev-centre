const close=()=>   {
    let modal = document.getElementById("myModal");
    modal.className="modal";
    }
    
const modal = () => {
    return (
        <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={close}>&times;</span>
        </div>
        
        </div>
  
    )
}

export default modal
