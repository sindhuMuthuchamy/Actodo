import { useState } from "react"

function AddToDoForm(props){
    const Activity = props.Activity
    const setActivity = props.setActivity

const [newActivity,setNewactivity] = useState("")
function handleChange(event){
    setNewactivity(event.target.value)
}
function addActivity(){
    setActivity([...Activity,{id:Activity.length+1, activity: newActivity}])
    setNewactivity("")
}

    return(
        <div className="flex flex-col gap-3">
                    <h1 className="font-medium text-2xl">Manage Activities</h1>
                    <div>
                        <input value={newActivity}
                         type="text" onChange={handleChange} placeholder="Next Activity?" className="border border-black p-1 bg-transparent"></input>
                        <button onClick={addActivity} className="border border-black p-1 bg-black text-white">Add</button>
                    </div>
                </div>
    )
}
export default AddToDoForm