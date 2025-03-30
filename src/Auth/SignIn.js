import React, { useEffect, useState } from "react";
import logoMini from "../assets/images/Logo/FluentAir-logo-mini.webp";
import { useNavigate } from "react-router-dom";
import SocialSignUpButton from "../components/SocialSignupButton/SocialSignupButton";
import { FaGoogle } from "react-icons/fa";
import { auth, provider, db, timestamp } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

import "./Auth.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult(true);
        // Role will be checked after login
      }
    });
    return () => unsub();
  }, []);

  const setRoleAndClaims = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
  
    let role = "user"; // default fallback
  
    if (docSnap.exists()) {
      const userData = docSnap.data();
      role = userData.role || "user";
    } else {
      // If the user doesn't exist in Firestore, you can still set a default
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        role,
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
  
    const token = await user.getIdToken(true);
    const toastId = toast.loading("Setting up your session...");
  
    try {
      const res = await fetch(
        "https://us-central1-fluentair-d4ff3.cloudfunctions.net/setUserRole",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ uid: user.uid, role }),
        }
      );
  
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error?.message || "Failed to set user role");
      }
  
      // 🔁 Force token refresh to include the new role
      await auth.currentUser.getIdToken(true);
      toast.success("Login successful!", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error("Failed to assign role: " + error.message, { id: toastId });
      throw error;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      if (!user.emailVerified) {
        toast.dismiss(toastId);
        toast.error("Please verify your email before logging in.");
        await auth.signOut();
        return;
      }

      await setRoleAndClaims(user);
    } catch (error) {
      toast.error("Login failed: " + error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Signing in with Google...");
    try {
      const result = await signInWithPopup(auth, provider);
      await setRoleAndClaims(result.user);
      toast.success("Login successful!", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error("Google login failed: " + error.message, { id: toastId });
    }
  };

  return (
    <div className="signInMain">
      <Toaster position="top-center" />
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
