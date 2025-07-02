import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import "../styles/Profile.css";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/users/${user._id}`, { name, email });
      alert("Profile updated!");
    } catch (err) {
      alert(err.response?.data?.msg || "Update failed");
    }
  };

  const getInitials = (userName) => {
    if (!userName) return '';
    return userName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {getInitials(name)}
        </div>
        <div>
          <h2>My Profile</h2>
          <span className="profile-role">{user?.role || 'USER'}</span>
        </div>
      </div>
      
      <form onSubmit={handleSave}>
        <div className="profile-form-group">
          <label htmlFor="profile-name">Full Name</label>
          <input
            id="profile-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="profile-form-group">
          <label htmlFor="profile-email">Email Address</label>
          <input
            id="profile-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="profile-submit">
          Update Profile
        </button>
      </form>
    </div>
  );
}
