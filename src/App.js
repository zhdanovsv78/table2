import React, {useState} from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import {fetchAll} from "./api/fake.api/user.api"


const App=()=> {
	const [users, setUsers] = useState(fetchAll())
	
	const handleDelete = (userId) => {
	}
	const handleToggleBookMark = (id) => {
	}
	
	return (
		<div>
			<h1>Title</h1>
			<Users 
				{...users}
			/>
			
		</div>
	)
}

export default App;
