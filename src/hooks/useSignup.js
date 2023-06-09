import { useState } from "react";
import {useAuthContext} from "./useAuthContext"


export const useSignup = () =>{
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const {dispatch} = useAuthContext()

  const signup = async(email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch("https://travelog-backend.onrender.com/api/user/signup",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email, password})
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setIsLoading(false)
    }

    if(response.ok){
      //store JWT in loacal storage
      localStorage.setItem('user',JSON.stringify(json))

      //update the context
      dispatch({type:"LOGIN", payload:json})

      //set isLoading to false
      setIsLoading(false)
    }

  }

  return {signup, error, isLoading}
}