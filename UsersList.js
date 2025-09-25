import React,{useState.useEffect}from'react';
function UserList(){
const[users,setUsers]=useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')//smaple public API
.then(response=>response.json())
.then(data=>setUsres(data))
.catch(error=>console.error('Error fetching data:',error));
},[]);
return(
<div style={{padding:'20px'}}>
<h2>User List(Fetched using useEffect)</h2>
<ul>
{users.map(user=>(
<li key={user.id}>
<strong>{user.name}</strong>-{user.email}
</li>
)
)}
</ul>
</div>
);
}
export default UsersList;