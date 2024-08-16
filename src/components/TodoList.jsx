
import Todoitem from "./Todoitem"
function Todolist(props){
    
const Activity = props.Activity
const setActivity = props.setActivity

    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                    <h1 className="text-2xl font-medium">Today's Activity</h1>

                {Activity.length === 0?<p>You have not added any activities yet</p>:""}

                    {
                        Activity.map(function(item,index)
                    {
                        return <Todoitem id={item.id} activity={item.activity} index={index} Activity={Activity} setActivity={setActivity}/>
                    })
                    }
                </div>
    )
}

export default Todolist