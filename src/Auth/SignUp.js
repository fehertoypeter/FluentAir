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
  updateProfile,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import "./Auth.css";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) await user.getIdToken(true);
    });
    return () => unsub();
  }, []);

  const createUserDocIfNotExist = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    const isAdmin = user.email === "admin@fluentair.com";
    const role = isAdmin ? "admin" : "user";

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        role,
        emailVerified: false,
        createdAt: timestamp,
        userNotesBank: {},
        userPreviousTests: [],
        userPrivateCollectionsBank: [],
        userQuestionData: {
          seenQuestions: [],
          wrongAnswers: [],
        },
      });
    } else {
      await updateDoc(userRef, { emailVerified: false });
    }

    await user.getIdToken(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== confirmPass) {
      toast.error("Passwords do not match");
      return;
    }

    const toastId = toast.loading("Creating account...");
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        toast.error("Email is already registered!", { id: toastId });
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: email.split("@")[0],
      });

      await createUserDocIfNotExist(user);

      await sendEmailVerification(user); // ✅ Correct method

      await auth.signOut();

      toast.dismiss(toastId);
      toast(
        (t) => (
          <span>
            ✅ Verification email sent to <strong>{email}</strong>.
            <br />Please verify your email before logging in.
            <br />
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/sign-in");
              }}
              style={{ marginTop: 10, padding: "6px 12px", backgroundColor: "#ddd", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              OK
            </button>
          </span>
        ),
        { duration: Infinity }
      );
    } catch (error) {
      toast.error(error.message || "Signup failed", { id: toastId });
    }
  };

  const handleGoogleSignup = async () => {
    const toastId = toast.loading("Signing up with Google...");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await createUserDocIfNotExist(user);

      toast.success("Signed in with Google!", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Google signup failed", { id: toastId });
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
                By signing up or logging in, you consent to FluentAir's Terms of Use and Privacy Policy.
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

export default SignUp;
