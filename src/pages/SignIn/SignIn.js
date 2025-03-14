import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialSignUpButton from "../../components/SocialSignupButton/SocialSignupButton";
import { FaGoogle } from "react-icons/fa";
import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signInMain">
      <div className="signInContainer">
        <h1>Please Sign In</h1>

        <div className="signInContainer">
          <div className="SignInInputBox">
            <form onSubmit={""}>
              <div className="SignInInputBox">
                <input
                  className="SignInInput"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
                />
                <span>Email</span>
              </div>
              <div className="SignInInputBox">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required
                />
                <span>Password</span>
              </div>
              <button className="SocialSignUpButton SignIn" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="separator">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>
        <SocialSignUpButton
          onClick={""}
          icon={FaGoogle}
          text="Sign In with Google"
        />
        <div className="separator">
          <span></span>
          <p>Don’t have an account yet?</p>
          <span></span>
        </div>
        <SocialSignUpButton
          onClick={() => navigate("/sign-up")}
          text="Sign Up"
        />
      </div>
    </div>
  );
}

export default SignIn;
