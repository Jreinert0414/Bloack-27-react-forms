import { useState } from "react";


const Authenticate = ({ token }) => {
  const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate";
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('')


  const handleClick = async (event) => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          "Content-Type": "application.json",
          Authorization: `Bearer ${token}`
        },

      });
      const jsonObject = await response.json();
      console.log(jsonObject.message);
      setSuccessMessage(jsonObject.message);

    } catch (error) {
      setError(error.message)
    }


  };



  return (
    <>
      <h2>Authenticate:</h2>
      {
        successMessage ? <p>{successMessage}</p> :
          <p>{error}</p>
      }

      <button onClick={handleClick}>Log in!</button>

    </>

  );
};

export default Authenticate