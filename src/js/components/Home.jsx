import React from "react";
import Tasks from "./Tasks";
//create your first component
const Home = () => {
	return (
		<div className=" d-flex flex-column text-center bg-secondary w-100 h-100">
            <h1 className="text-white">To Do List</h1>
			<Tasks/>
		</div>
	);
};

export default Home;