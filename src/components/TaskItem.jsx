
function TaskItem(props){
    return (
        <div>
            <li  className="flex justify-between bg-gray-100 rounded-xl p-1 mt-2">
              <p>{props.text}</p>
              <button onClick={() => { props.onChecked(props.id)}} className="text-white px-3 py-1  rounded-xl hover:opacity-80 transition bg-red-400 "> - </button>
            </li>
        </div>
    );
}

export default TaskItem;