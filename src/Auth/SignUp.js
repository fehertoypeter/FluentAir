import React from "react";
import logoMini from "../assets/images/Logo/FluentAir-logo-mini.webp";
import { useNavigate } from "react-router-dom";
import SocialSignUpButton from "../components/SocialSignupButton/SocialSignupButton";
import { FaGoogle } from "react-icons/fa";

import "./Auth.css";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="signInMain">
      <div className="signInContainer">
        <img src={logoMini} alt="FluentAir Logo" className="logo" />
        <div className="sign-in-container">
          <div className="SignInInputBox">
            <form>
              <div className="SignInInputBox">
                <input type="email" autoComplete="new-password" required />
                <span>Email</span>
              </div>
              <div className="SignInInputBox">
                <input type="password" autoComplete="new-password" required />
                <span>Password</span>
              </div>
              <div className="SignInInputBox">
                <input type="password" autoComplete="off" required />
                <span>Confirm Password</span>
              </div>
              <p className="terms-and-use">
                By signing up or logging in, you consent to FluentAir's Terms of
                Use and Privacy Policy.
              </p>
              <button className="SocialSignUpButton SignIn" type="submit">
                Sign Up
              </button>
              <div className="sign-up-form-footer">
                <p onClick={() => navigate("/sign-in")}>Log In</p>
              </div>
            </form>
          </div>
          <div className="separator">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <SocialSignUpButton
            onClick={() => console.log("Google Sign Up")}
            icon={FaGoogle}
            text="Sign Up with Google"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
