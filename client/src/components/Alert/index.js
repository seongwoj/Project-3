import React from "react"


function Alert (props){
console.log(props)
    if (props.alert===true){
    return (
        <div className="alert alert-success" role="alert">
            you have a message from {props.username}
        </div>
    )
    }else{
        return(<div></div>)
    }
}

export default Alert