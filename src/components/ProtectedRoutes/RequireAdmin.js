import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const RequireAdmin = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().role === "admin") {
          setIsAdmin(true);
        } else {
          navigate("/"); // redirect non-admins
        }
      } else {
        navigate("/sign-in");
      }
      setChecking(false);
    });

    return () => unsub();
  }, [navigate]);

  if (checking) return <Loader />;

  return isAdmin ? children : null;
};

export default RequireAdmin;
