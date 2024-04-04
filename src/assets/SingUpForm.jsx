
import { useState } from "react"
const API_URL = 'https://fsa-jwt-practice.herokuapp.com/signup'

const SignUpFormn = ({token, setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');




    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: {username},
              password: {password},
            }),
          });
          const jsonObject = await response.json();
          console.log(jsonObject);
          setToken(jsonObject.token);
          localStorage.setItem("Token", jsonObject.token);
        } catch (error) {
          setError(error)
        }
      };







    return (
        <>
            <h2>Sign In Here: </h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:<input 
                    value={username}
                    onChange={(event)=>
                    setUsername(event.target.value)}
                    />
                </label>
                <label>
                    Password:<input
                    value={password}
                    onChange={(event)=>
                    setPassword(event.target.value)} />
                </label>
                <button>Submit:</button>
            </form>
        </>
    )


}

export default SignUpFormn