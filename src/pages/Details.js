import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details(){

  const {id} = useParams();
  const [user,setUser] = useState(null);

  useEffect(()=>{

    fetch(`https://dummyjson.com/users/${id}`)
      .then(res=>res.json())
      .then(data=>setUser(data));

  },[id]);

  if(!user){
    return <p>Loading...</p>;
  }

  return(

    <div style={{padding:"20px"}}>

      <h2>User Details</h2>

      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>

    </div>

  );
}

export default Details;