import React, { useEffect, useState } from "react";
import logoMini from "../assets/images/Logo/FluentAir-logo-mini.webp";
import { useNavigate } from "react-router-dom";
import SocialSignUpButton from "../components/SocialSignupButton/SocialSignupButton";
import { FaGoogle } from "react-icons/fa";
import { auth, db, provider, timestamp } from "./../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import "./Auth.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/");
    });
    return () => unsub();
  }, [navigate]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
  
      await updateProfile(user, {
        displayName: email.split("@")[0],
      });
  
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
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };
  

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Define admin
      const isAdmin = user.email === "admin@fluentair.com";

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
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

      navigate("/");
    } catch (error) {
      console.error("Google signup error:", error.message);
      alert(error.message);
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
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <span>Password</span>
              </div>
              <div className="SignInInputBox">
                <input
                  type="password"
                  autoComplete="off"
                  required
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
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
            onClick={handleGoogleSignup}
            icon={FaGoogle}
            text="Sign Up with Google"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
