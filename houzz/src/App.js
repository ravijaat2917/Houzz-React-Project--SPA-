import pic from "./logo.jpg";
import googlePic from "./Images/google-logo.png";
import './App.css';

function Header() {
  return (
    <div className="App">
        <div id='upper-content'>
          <img id="logo-img" src={pic} alt=""/>
          <input id="inputArea" placeholder='Search Photos, Products, Pros & More...'></input>
          <div className="Button"><i class="fa-solid fa-user"></i> SignIn</div>
          <div className="Button"><span><i class="fa-solid fa-suitcase"></i></span> Join as a Pro</div>
        </div>
        <div id='lower-content'>
          <div  className="lower-content-material Button"><i class="fa-solid fa-image"></i> PHOTOS</div>
          <div className="lower-content-material Button"><i class="fa-solid fa-user-tie"></i> FIND PROFESSIONALS</div>
          <div className="lower-content-material Button"><i class="fa-solid fa-book-open"></i> STORIES</div>
          <div className="lower-content-material Button"><i class="fa-solid fa-message"></i> ADVISE</div>
        </div>
    </div>

    

  );
}

export default Header ;