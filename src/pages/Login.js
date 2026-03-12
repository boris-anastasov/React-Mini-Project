import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if(!email.includes("@")){
      setError("Невалиден email");
      return;
    }

    if(password.length < 4){
      setError("Паролата трябва да е поне 4 символа");
      return;
    }

    setError("");
    navigate("/list");
  };

  return (

    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>

      <div style={{
        padding:"30px",
        border:"1px solid gray",
        borderRadius:"8px"
      }}>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <br/><br/>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <br/><br/>

          <button type="submit">Login</button>

        </form>

        <p style={{color:"red"}}>{error}</p>

      </div>

    </div>

  );
}

export default Login;
