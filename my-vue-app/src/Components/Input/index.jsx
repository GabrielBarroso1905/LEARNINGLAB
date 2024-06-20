import { useEffect } from "react";
import "./styles.css"


function Input({type,placeHolder}){
useEffect(() =>{
    console.log("useEffect")
},[])




    return(
        <input type={type} placeholder={placeHolder} className="input-container"/>
    )
}
export default Input;