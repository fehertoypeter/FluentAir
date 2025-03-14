import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Importáld a Firestore példányt
import "./AdminPanel.css"; // Stílusok (lásd lent)

const AdminPanel = () => {
  const [users, setUsers] = useState([]); // Felhasználók listája
  const [filteredUsers, setFilteredUsers] = useState([]); // Szűrt felhasználók
  const [searchTerm, setSearchTerm] = useState(""); // Keresési kifejezés
  const [editingUser, setEditingUser] = useState(null); // Szerkesztés alatt álló felhasználó

  // Felhasználók lekérése a Firestore-ból
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
      setFilteredUsers(usersList); // Alapértelmezett szűrés: minden felhasználó
    };

    fetchUsers();
  }, []);

  // Keresés és szűrés
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.subscription.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  // Szerkesztés indítása
  const handleEdit = (user) => {
    setEditingUser({ ...user });
  };

  // Mezők frissítése
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Mentés a Firestore-ba
  const handleSave = async () => {
    if (editingUser) {
      const userRef = doc(db, "users", editingUser.id);
      await updateDoc(userRef, {
        role: editingUser.role,
        subscription: editingUser.subscription,
      });
      alert("Changes saved successfully!");

      // Frissítsd a felhasználók listáját
      const updatedUsers = users.map((user) =>
        user.id === editingUser.id ? editingUser : user
      );
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      setEditingUser(null);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      {/* Keresés */}
      <input
        type="text"
        placeholder="Search by name, email, role, or subscription..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Felhasználók listája */}
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Subscription</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email || "N/A"}</td>
              <td>
                {editingUser?.id === user.id ? (
                  <select
                    name="role"
                    value={editingUser.role}
                    onChange={handleChange}
                  >
                    <option value="userprofile">User</option>
                    <option value="admin">Admin</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editingUser?.id === user.id ? (
                  <select
                    name="subscription"
                    value={editingUser.subscription}
                    onChange={handleChange}
                  >
                    <option value="FreeLimitedAccess">
                      Free Limited Access
                    </option>
                    <option value="wizardPackage">Wizard Package</option>
                    <option value="NaturalPackage">Natural Package</option>
                  </select>
                ) : (
                  user.subscription
                )}
              </td>
              <td>
                {editingUser?.id === user.id ? (
                  <button onClick={handleSave} className="save-button">
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(user)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
