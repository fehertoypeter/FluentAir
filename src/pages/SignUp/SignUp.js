import React from "react";
import { useNavigate } from "react-router-dom";
import SocialSignUpButton from "../../components/SocialSignupButton/SocialSignupButton";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div class="signUpMain">
      <div className="signUpContainer">
        <div className="sign-up-header">
          <IoArrowBack
            className="back-icon"
            onClick={() => navigate("/sign-in")}
          />
          <h1 className="sign-up-title">Please Sign Up</h1>
        </div>
        <div className="SignUpInputBox">
          <input
            className="SignUpInput"
            type="text"
            autoComplete="off"
            required
          />
          <span>Email</span>
        </div>
        <div className="SignUpInputBox">
          <input
            className="SignUpInput"
            type="password"
            autoComplete="new-password"
            required
          />
          <span>Password</span>

          <p>
            Password must be at least 8 characters long, and include special
            characters, capital letters, and digits.
          </p>
        </div>
        <SocialSignUpButton
          className="SignUp"
          onClick={() => console.log("Sign In clicked")}
          text="Sign Up"
          color="#cdda32"
        />
        <div className="separator">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>
        <SocialSignUpButton
          onClick={() => console.log("Facebook Sign Up clicked")}
          icon={FaFacebook}
          text="Sign Up with Facebook"
        />
        <SocialSignUpButton
          onClick={() => console.log("Google Sign Up clicked")}
          icon={FaGoogle}
          text="Sign Up with Google"
        />
        <SocialSignUpButton
          onClick={() => console.log("Apple Sign Up clicked")}
          icon={FaApple}
          text="Sign Up with Apple"
        />

        <p>
          By proceeding to sign up, I confirm my agreement with fluentair Terms
          of Use and Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default SignUp;
