import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List(){

  const [users,setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{

    fetch("https://dummyjson.com/users?limit=20")
      .then(res=>res.json())
      .then(data=>setUsers(data.users));

  },[]);


  const deleteItem = (id) => {

    if(window.confirm("Искате ли да изтриете?")){

      setUsers(users.filter(user => user.id !== id));

    }

  };


  const logout = () => {

    if(window.confirm("Искате ли да излезете?")){
      navigate("/");
    }

  };


  return(

    <div style={{padding:"20px"}}>

      <h2>User List</h2>

      <button onClick={logout}>Logout</button>

      <ul>

        {users.map(user=>(

          <li key={user.id}>

            <span
              style={{cursor:"pointer"}}
              onClick={()=>navigate(`/details/${user.id}`)}
            >
              {user.firstName} {user.lastName}
            </span>

            {" "}
            <button onClick={()=>deleteItem(user.id)}>
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>

  );
}

export default List;