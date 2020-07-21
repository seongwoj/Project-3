import React from "react"
import "./styles.css"

function Cityalert (props){
console.log(props.alertState)
    if (props.alertState===true){
    return (
        <div className="alert alert-danger" role="alert">
            Invalid input: Enter a city in the search field, then try again
        </div>
    )
    }else{
        return(<div></div>)
    }
}

export default Cityalert