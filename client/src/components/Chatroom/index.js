import React, {useState, useEffect} from "react"
import Alert from "../Alert"
import io from 'socket.io-client'
import "./styles.css"


let socket;

function Chatroom(props){
  const [message, setMessage] = useState({})
  const [chat, setChat] = useState([])
  const [users, setUsers]=useState([])
  const [socketid, setSocketid]=useState("")
  const [chatRoomName, setChatRoomName]=useState("")
  const [alertState, setAlertState]=useState(null)
  const [userName, setUserName]=useState("")
  

  useEffect(() =>{
    socket = io.connect()
    const name=props.username
    socket.on('connect',()=>{
    socket.emit('new-user',name);
    })

    socket.on("user-connected", user => {
      setUsers(users => [...users, user])
    })
 

    socket.on("users", users => {
      setUsers(users);
    });


    socket.on('render-message', (message) => {
      setUserName(message.name)
      setChat(chat=>[...chat, message])
      setAlertState(true)
      setTimeout(()=>{
        setAlertState(null);
      }, 5000);
    })


    socket.on("disconnected", id => {
      setUsers(users => {
        return users.filter(user => user.id !== id);
      });
    });
    
    return () => socket.close();

  },[])
   
 console.log(chat)
 console.log(message)

  const handleChange=event=>{
      const username = props.username
      const value = event.target.value
      setMessage({...message, name:username, message:value})
    }
  
   const handleSubmit=event=>{
      event.preventDefault();
      setChat(chat=>[...chat, message])
      socket.emit('message', {msg:message, to: socketid})
      document.getElementById('message-input').value="";
    }
  
    const handleChat=event=>{
      event.preventDefault();
      setSocketid(event.target.name)
      setChatRoomName(event.target.value)
      setAlertState(null)
    }
 

    const renderUsers=()=>{
      return users.map(function(user){
        return (
        <div key={user.id}>
        <p className="connected-user">{user.username}</p>
        <button type="button" name={user.id} value={user.username} className="btn btn-primary btn-chat" data-toggle="modal" data-target="#exampleModal" onClick={handleChat} >Chat</button>
        </div>
        )
      })
    }
  
    const renderChat=()=>{
      return chat.map(function(message, index){
        return <div key={index} id="message-container">{message.name}: <span>{message.message}</span></div>
      })
    }
    
    const handleClose=()=>{
      setChat([])
      setAlertState(null)
    }
    
  return(
<div>
  
    
  <div className="modal" tabIndex="-1" role="dialog" id="exampleModal">
    <div className="modal-dialog">
      <div className="modal-content chat-modal">
        <div className="modal-header">
          <h5 className="modal-title">Chatroom with {chatRoomName}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        {renderChat()}
        </div>
        <div className="modal-footer">
          <form id="send-container">
            <input name="message" type="text" id="message-input" placeholder="type message.." onChange={handleChange}/>
            <button type="submit" id="chat-send-button"onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="card online-users"style={{width: "100%", border: "none"}}>
  <div className="card-body" >
    <h2 className="chat-heading" id="chat-title">Chat with Dog Owners</h2>
    {alertState ? <Alert username={userName} alert={alertState} />: null}
    {renderUsers()}
  </div>
</div>




</div>
  )
}

export default Chatroom;



  