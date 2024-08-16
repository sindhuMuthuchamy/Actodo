
import { AiTwotoneDelete } from "react-icons/ai";

function Todoitem(props){
const Activity = props.Activity
const setActivity = props.setActivity

    function handleDelete(deleteid){
        const temparr = Activity.filter(function(item)
    {
        if(item.id === deleteid){
            return false
        }
        else{
            return true
        }
    })
    setActivity(temparr)
    }
    return(
        <div className="flex justify-between">
        <p className="my-1">{props.index+1}.{props.activity}</p>
        <button className="text-red-700 p-1 my-1 font-medium bg-red-400 rounded-lg hover:border border-red-800" onClick={()=>handleDelete(props.id)}><AiTwotoneDelete /></button>
        </div>
    )
}
export default Todoitem