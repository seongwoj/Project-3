import React from "react";
import "../LogIn/style.css"


function LogIn(){
    return (
        <div className="form_bg">
          <div className="container">
             <div className="row">
                <div className=" col-md-8   col-sm-8   col-xs-6   col-lg-10">
                <form className="form_horizontal">
                    <div className="form_icon" style={{fontSize: "50px"}}><i id="paw" className="fa fa-paw"></i></div>
                    <h3 className="title">FidoFriend</h3>
                    <h4>Log-In</h4>
                    <div className="form-group">
                      <input className="form-control" type="text" name="" placeholder="username"/>
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="password" name="" placeholder="password"/>
                    </div>
                    <button className="btn signin">Login</button>
                    <br/>
                    <br/>
                    <h5><a href="#">Create New Account <i className="fa fa-arrow-right"></i></a></h5>
                </form>
                </div>
             </div>
          </div>
    </div>
    )
}

export default LogIn;