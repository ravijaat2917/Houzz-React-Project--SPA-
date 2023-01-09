import pic from "./logo.jpg";
import googlePic from "./Images/google-logo.png"
import './App.css';

function Header() {
  return (
    <div className="App">
        <div id='upper-content'>
          <img id="logo-img" src={pic} alt=""/>
          <input id="inputArea" placeholder='Search Photos, Products, Pros & More...'></input>
          <div><i class="fa-solid fa-user"></i> SignIn</div>
          <div><span><i class="fa-solid fa-suitcase"></i></span> Join as a Pro</div>
        </div>
        <div id='lower-content'>
          <div className="lower-content-material"><i class="fa-solid fa-image"></i> PHOTOS</div>
          <div className="lower-content-material"><i class="fa-solid fa-user-tie"></i> FIND PROFESSIONALS</div>
          <div className="lower-content-material"><i class="fa-solid fa-book-open"></i> STORIES</div>
          <div className="lower-content-material"><i class="fa-solid fa-message"></i> ADVISE</div>
        </div>
        <Body/>
    </div>

  );
}

function Body() {
  return(
    <>
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
    </>
  )
}
export default Header ;