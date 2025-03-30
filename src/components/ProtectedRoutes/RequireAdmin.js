import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const RequireAdmin = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const tokenResult = await user.getIdTokenResult();
          const role = tokenResult.claims.role;

          if (role === "admin") {
            setIsAdmin(true);
          } else {
            navigate("/"); // not admin
          }
        } catch (err) {
          console.error("Error checking admin claim:", err);
          navigate("/sign-in");
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
