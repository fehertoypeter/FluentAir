import React, { useEffect, useState } from "react";
import logoMini from "../assets/images/Logo/FluentAir-logo-mini.webp";
import { useNavigate } from "react-router-dom";
import SocialSignUpButton from "../components/SocialSignupButton/SocialSignupButton";
import { FaGoogle } from "react-icons/fa";
import { auth, provider, db, timestamp } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

import "./Auth.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/");
    });
    return () => unsub();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        const isAdmin = user.email === "admin@fluentair.com";

        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
          role: isAdmin ? "admin" : "user",
          createdAt: timestamp,
          userNotesBank: {},
          userPreviousTests: [],
          userPrivateCollectionsBank: [],
          userQuestionData: {
            seenQuestions: [],
            wrongAnswers: [],
          },
        });
      }

      navigate("/");
    } catch (error) {
      console.error("Google login error:", error.message);
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <div className="signInMain">
      <div className="signInContainer">
        <img src={logoMini} alt="FluentAir Logo" className="logo" />
        <div className="sign-in-container">
          <div className="SignInInputBox">
            <form onSubmit={handleSubmit}>
              <div className="SignInInputBox">
                <input
                  type="email"
                  autoComplete="new-password"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </div>
              <div className="SignInInputBox">
                <input
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>Password</span>
              </div>
              <p className="terms-and-use">
                By signing up or logging in, you consent to FluentAir's Terms of
                Use and Privacy Policy.
              </p>
              <button className="SocialSignUpButton SignIn" type="submit">
                Log In
              </button>
              <div className="sign-in-form-footer">
                <p>Forgot password?</p>
                <p onClick={() => navigate("/sign-up")}>Sign Up?</p>
              </div>
            </form>
          </div>
          <div className="separator">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <SocialSignUpButton
            onClick={handleGoogleLogin}
            icon={FaGoogle}
            text="Log In with Google"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
