import AddToDoForm from "./Addtodoform"
import Todolist from "./TodoList"
import { useState } from "react"

function Todocontainer() {

    const [Activity, setActivity] = useState([
        {
            id:1,
            activity:"Read Bible"
        },
    ])

    return (
        <div>
            <div className="flex flex-wrap gap-5">
               <AddToDoForm Activity={Activity} setActivity={setActivity}/> 
                <Todolist Activity={Activity} setActivity={setActivity}/>
            </div>
        </div>
        
    )
}

export default Todocontainer