import { useState } from "react";

function Tasks() {
  return(<div>
    <div className="w-full max-w-md bg-bermuda rounded-2xl shadow-lg p-8 mt-5 flex flex-col">
        
        {/* input */}
        <div className="flex flex-row gap-45">
            <input type="text" name="" id="" placeholder="Write Task Here!" className=" border-b border-gray-300 py-2 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"/>
            <button className="text-white px-4 py-2 rounded-xl hover:opacity-80 transition bg-red-400 ">+</button>
        </div>

        {/* Tasks */}
                 
    </div>
  </div>);
}

export default Tasks;
