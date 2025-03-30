import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  onAuthStateChanged,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import {
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import "./AccountSettings.css";
import toast, { Toaster } from "react-hot-toast";

const AccountSettings = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }

      try {
        const token = await currentUser.getIdToken(true);
        const userRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const [first, last] = (data.displayName || "").split(" ");
          setFirstName(first || "");
          setLastName(last || "");
          setEmail(data.email || currentUser.email);
          setUser(currentUser);
        } else {
          toast.error("User data not found.");
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        toast.error("Failed to fetch user profile.");
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [navigate]);

  const handleSave = async () => {
    if (!user) {
      toast.error("User is not loaded.");
      return;
    }

    const newDisplayName = `${firstName} ${lastName}`.trim();

    try {
      await updateProfile(user, { displayName: newDisplayName });
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { displayName: newDisplayName });

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };

  const handleDeleteData = async () => {
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        userNotesBank: {},
        userPreviousTests: [],
        userPrivateCollectionsBank: [],
        userQuestionData: {
          seenQuestions: [],
          wrongAnswers: [],
        },
      });
      toast.success("All study data deleted.");
    } catch (error) {
      console.error("Failed to delete study data:", error);
      toast.error("Could not delete data.");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteDoc(doc(db, "users", user.uid));
      await deleteUser(user);
      toast.success("Your account has been deleted.");
      navigate("/sign-up");
    } catch (error) {
      console.error("Account deletion error:", error);
      toast.error("Account deletion failed. You may need to re-authenticate.");
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="profile-settings">
      <Toaster position="top-right" />
      <div className="section">
        <h2>Personal Information</h2>
        <div className="settings-container">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} disabled />
          </div>
          <button className="subscribe-button" onClick={handleSave}>
            Save Changes
          </button>
        </div>

        <div className="interface-settings">
          <h2>Interface</h2>
          <div className="toggle-group-container">
            <div className="toggle-group">
              <label>Dark Mode</label>
              <div className="filter-button-container">
                <DarkModeToggle />
              </div>
            </div>

            <div className="toggle-group">
              <label>Language</label>
              <div className="filter-button-container">
                <button className="language-filter-button">EN</button>
                <button className="language-filter-button">HU</button>
              </div>
            </div>
          </div>
        </div>

        <div className="subscription-settings">
          <h2>Subscription</h2>
          <div className="subscription-settings-container">
            <p>
              Current Package: <strong>Free Plan</strong>
            </p>
            <button className="subscribe-button">Buy Subscription</button>
          </div>
        </div>

        <div className="section danger-zone">
          <h2>Danger Zone</h2>
          <div className="danger-actions">
            <div className="danger-zone-container">
              <p>To reset all your progress, please click the button below.</p>
              <button className="danger-button" onClick={handleDeleteData}>
                Delete All Study Data
              </button>
            </div>
            <div className="danger-zone-container">
              <p>Permanently delete your account.</p>
              <button className="danger-button" onClick={handleDeleteAccount}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
