import { useState } from "react";

const Tasks = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && input.trim() !== "") { 
            setList([...list, input]);
            setInput(""); 
            event.target.value = ""; 
        }
    };

    const deleteTask = (indexToDelete) => {
        setList(list.filter((e, i) => i !== indexToDelete));
    };

    return (
        <div className="container bg-white text-secondary p-5">
            <input type="text"
                className="form-control border-0 w-100 shadow-none"
                placeholder="What needs to be done?"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            {list.length > 0 ?
                <div className="pb-2 border-top">
                    {list.map((e, i) => (
                        <div key={i} className="d-flex align-items-center border-bottom w-100 task-row">
                            <p className="flex-grow-1 m-0 p-2 text-center">{e}</p>
                            <i 
                                className="fa-solid fa-xmark text-danger pe-3 icon-hidden" 
                                onClick={() => deleteTask(i)}
                                style={{ cursor: 'pointer' }}
                            ></i>
                        </div>
                    ))}
                    <div className="text-start small p-2">{list.length} items</div>
                </div>
                : <div className="fs-5 p-3">There are no tasks, add tasks.</div>}
        </div>
    );
};

export default Tasks;