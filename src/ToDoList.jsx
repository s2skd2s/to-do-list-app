import { useState , useEffect } from "react"

function ToDoList(){
    const [tasks, setTasks] = useState(["Task1", "Task2"]);
    const [newTask, setNewTask] = useState("");

    useEffect(()=>{
        document.title = "New task is added";
        setTimeout(()=>{
            document.title = "ToDoList";
        },5000); 
    }, [tasks])


    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    function deleteTask(index){
        setTasks(tasks => tasks.filter((_,i) => i !== index));
    }

    function moveTaskUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index-1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    
    function moveTaskDown(index){
        if(index < tasks.length - 1 ){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }


    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task..." 
                        value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ul>
                {tasks.map((task,index)  => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() =>deleteTask(index)}>Delete</button>
                        <button className="move-up-button" onClick={() =>moveTaskUp(index)}>Move Up</button>
                        <button className="move-down-button" onClick={() =>moveTaskDown(index)}>Move Down</button>
                    </li>)}
            </ul>
        </div>
    )
}

export default ToDoList