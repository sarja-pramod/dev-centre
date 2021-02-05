
const modal = ({state,closemodal}) => {
    return (
        <div id="myModal" className={state?"modal":"modal modal_open"}>
        <div className="modal-content">
          <span className="close" onClick={closemodal}>&times;</span>
        </div>
        
        </div>
  
    )
}

export default modal
