import React, {useState} from 'react'
function Content() {

    const [task,setTask] = useState(["Wake up at 10","Take a Shower","Walk the dog"]);
    const [nextTask, setnextTask] = useState("");

    function addTask(){
        if(nextTask.trim() !== ""){
            setTask([...task, nextTask])
            setnextTask("");
        }
    }

    function removeTask(index){
        const updatetask = task.filter((_,i) => i!==index)
        setTask(updatetask);
    }

    function moveUp(index){
        if (index > 0){
            const updatetask = [...task];
            [updatetask[index],updatetask[index-1]] =
                [updatetask[index-1],updatetask[index]];
            setTask(updatetask)
        }
    }

    function moveDown(index){
        if (index < task.length-1){
            const updatetask = [...task];
            [updatetask[index],updatetask[index+1]] =
                [updatetask[index+1],updatetask[index]];
            setTask(updatetask)
        }
    }

    function handleInput(event){
        setnextTask(event.target.value);
    }

    return(
        <>
            <div>
                <div>
                    <h1>To-Do-List</h1>
                    <input type={"text"} placeholder={"Enter a task...."}
                           value={nextTask} onChange={handleInput}/>
                    <button className={"add-btn"} onClick={addTask}>Add</button>
                </div>
                <ol>
                    {task.map((element,index) =>
                        <li key = {index}>
                            <span className={"task"}>{element}</span>
                            <button onClick={() => removeTask(index)} className = {"del-btn"}>Delete</button>
                            <button onClick={() =>moveUp(index)} className = {"up-btn"}>Move up👆🏽</button>
                            <button onClick={() =>moveDown(index)} className = {"down-btn"}>Move down👇🏽</button>
                        </li>
                            )}
                </ol>
            </div>
        </>
    );

}

export default Content