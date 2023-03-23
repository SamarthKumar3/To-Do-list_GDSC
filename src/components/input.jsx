import React from "react";
import { useState } from "react";
import Listitems from "./list";

function Input() {
    const [toDo, settoDo] = useState([])

    const [newItem, setnewItem] = useState('What do you want to do today?')

    

    const addList = () => {
        settoDo([...toDo, newItem]);
        setnewItem('');
    }


    const deleteList = (id) => {
        settoDo(toDo => {
            return toDo.filter((arrElem, index) => {
                return index !== id;
            });
        });

    }

        const handleClick = e=>{
            if (e.target.style.textDecoration) {
                e.target.style.removeProperty('text-decoration');
            } else {
                e.target.style.setProperty('text-decoration', 'line-through');
            } 
        }

        const Important = e=>{
            if (e.target.style.backgroundColor) {
                e.target.style.removeProperty('background-color');
                
            } else {
                e.target.style.setProperty('background-color', 'orange');
            } 
            
        }

        
    

    

        return (
            <div className="inputArea container-fluid">
                <ol>
                    {toDo.map((itemval, index) => {
                        return <Listitems
                            key={index}
                            id={index}
                            Listval={itemval}
                            Delete={deleteList}
                            handleClick={handleClick}
                            Important={Important}
                        />
                    }
                    )}
                </ol>


                <div className="addInput">
                    <input id="input-text" type="text" className="addInput" value={newItem} onChange={
                        (e) => setnewItem(e.target.value)
                    } /><i className="fa-sharp fa-solid fa-circle-plus" onClick={addList}></i>
                </div>
                
            </div>
        )



    }
    export default Input;