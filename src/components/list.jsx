import React from "react";
import ListTime from "./time";

function Listitems(props) {

    return <div className="olli" >
        <li className="inputlist" onClick={props.handleClick} onDoubleClick={props.Important} ><i className="fa-solid fa-trash" onClick={() => props.Delete(props.id)}></i>{props.Listval }
        </li>
        
        <ListTime />
        
    </div>

}

export default Listitems;