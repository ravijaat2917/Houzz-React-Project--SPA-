import React from 'react'
import googlePic from "../Images/google-logo.png";
import '../App.css';

function signupContainer()  {
  return (
    
    <div className="container">
    <div className="left-side">
      <div className="inner-up">
        <p className="inner-heading">Make Your Dream</p>
        <p className="inner-heading">Home a Reality</p>
        <div className="inner-contentBTN">
        <button><img id="google-logo-button" src={googlePic} alt=""/> <span id ="signinButton" >Continue with Google</span></button>
        </div>
        <hr></hr>
        <input className="login-email" placeholder="Email"></input>
        <button id="signUp-btn">Sign Up with Email</button>
      </div>
    </div>
    <div className="right-side">
      <div className="right-side-interior" >

      <h1 id="h2-heading-txt" >Join Millions of<br></br> Home Professionals</h1>
      <h4>Get the all-in-one tool for marketing, CRM and project management</h4>
      <input id="letter-email-input" placeholder="Email"></input><br/>
      <button id="letter-email-button">Join for Free</button>

      <p id="below-letter-btn">By signing up, signing in or continuing, I agree to the Houzz Terms of Use and acknowledge the Houzz Privacy Policy. I agree that Houzz may use my email address for marketing purposes. I can opt out at any time through my settings.</p>

      </div>
    </div>
    </div>
    
  )
};

export default signupContainer ;