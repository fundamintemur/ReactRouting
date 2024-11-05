import React from 'react'
import {Link,Routes,Route,useMatch} from 'react-router-dom'
import {useEffect,useState} from "react";
import axios from 'axios';
import User from "./User"
function Users() {
    const[loading,setLoading]=useState(true)
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers(res.data))
    .finally(()=>setLoading(false));


    },[])
  return (
    <div>
        <h1>USERS</h1>
        {loading && <div>Loading..</div>}
     <ul>
       {users.map((user)=>(
            <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.id}/{user.name}</Link>
            </li>
        ))}
      </ul>
      <Routes>
    <Route path="/" element={<h3>Please select a user.</h3>} />
    <Route path="/user/:id" element={<User />} />
     </Routes>

    </div>
  )
}

export default Users
