import React, { Component } from "react";
import "../MainPage/styles.css"
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import className from "className";

function MainPage() {
    return (
        // Parent div start
        <div> 


            <section className="first">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>FidoFriend</h1>
                        <p className="tagline">This is the best application to have fun with your puppies.</p>
                        <button type="button" className="btn btn-info btn-lg" style={{backgroundColor: ""}}>Let's Start</button>
                        </div>
                    </div>
                </div>
            </section>
        
        
        <nav className="navbar navbar-light" style={{backgroundColor:"#199EB8", padding: 0, paddingLeft: "10px"}}>
            <img id="main-page" src="https://www.freelogodesign.org/file/app/client/thumb/f112d199-9e8d-49d4-a4b5-b1d650a80e63_200x200.png?1594149993285" style={{width: "70px", backgroundColor: "white"}} alt=""/>
            <ul className="nav-menu">
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#team">Team</a></li> 
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>

        <section className="about" id="about">
            <h2>About</h2>
            <span><img src="https://cdn0.iconfinder.com/data/icons/database-and-storage-4/70/info__faq__about__switch_-256.png" style={{width: "40px"}} alt=""/></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum commodi libero nam quod, provident, ipsam nostrum fuga quas necessitatibus in explicabo delectus fugit quos? Distinctio nesciunt quo maiores similique?</p>
       </section>

       <section className="features" id="features" style={{textAlign: "center"}}>
            <div className="col-md-12 col-xs-12">
               <span><img src="https://cdn2.iconfinder.com/data/icons/jetflat-multimedia/90/004_009_mail_email_envelope_message-256.png" style={{width: "40px"}} alt=""/></span>
               <p>Users can communicate with each other through our chat-box feature.</p>
               <br/>
               <span><img src="https://cdn0.iconfinder.com/data/icons/website-design-4/468/window_screen_with_mobile_icon-256.png" style={{width: "40px"}} alt=""/></span>
               <p>FidoFriend application is easy to use on any device.</p>
               <br/>
               <span><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/location-256.png" style={{width: "40px"}} alt=""/></span>
               <p>Our app is using your current location to help you find other dog owners near you.</p>
               <br/>
               <span><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/magnifyingglass-256.png" style={{width: "40px"}} alt=""/></span>
               <p>User can easily find pets-friendly places (restaurants, parks, beaches, bars etc.) near his/her location.</p>
               <br/>
            </div>
       </section>
        
        <div className="teammates" id="team">
           <h2>Meet our Developers</h2>
           <br/>

                William <a href="https://github.com/wrg93" target="_blank"><span><img id="william" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png" style={{width:"40px"}} alt=""/></span></a>
                Oleksandr <a href="https://github.com/prikat" target="_blank"><span><img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png" style={{width:"40px"}} alt=""/></span></a>
                Kaeneth <a href="https://github.com/kendayao" target="_blank"><span><img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png" style={{width:"40px"}} alt=""/></span></a> 
                <br/>
                Alex <a href="https://github.com/seongwoj" target="_blank"><span><img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" style={{width:"40px"}} alt=""/></span></a>
                Joe <a href="https://github.com/jcmastropieri" target="_blank"><span><img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-256.png" style={{width:"40px"}} alt=""/></span></a>
        </div>

        <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="section-title">Contact Us</h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4">
          <div className="info">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>Los Angeles<br/>Los Angeles, CA 90045</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>fidofriend@gmail.com</p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+1 818-888-7777</p>
            </div>

          </div>
        </div>

        <div className="col-lg-5 col-md-8">
          <div className="form">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="text-center"><button type="button" className="btn btn-primary">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </div>
    <br/>
  <br/>

  <br/>
  <br/>

  </section>




     </div>
    //  Parend div ends
    ) 
}

export default MainPage;