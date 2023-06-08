import React, { useState } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import logoImage from './images/logo.png';


function EditProfilePage() {
  const [profileImageFile, setProfileImageFile] = useState(null);

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    setProfileImageFile(file);
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <ul>
          <li><a href="#">หน้าแรก</a></li>
          <li><Link to="/profile">ผลิตภัณฑ์</Link></li>
          <li><Link to="/knowledge">การดูแลรักษา</Link></li>
          <li className="signup-box">
            <Link to="/" className="signup-button">Log out</Link>
          </li>
        </ul>
      </nav>

      <div className="edit-container">
        <h1>Edit Profile</h1>
        <form>
          <label htmlFor="profile-image">Profile Image</label>
          <input
            type="file"
            id="profile-image"
            accept="image/*"
            onChange={handleProfileImageUpload}
          />

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" required />

          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Your phone number" required />

          <label htmlFor="line">ID Line</label>
          <input type="text" id="line" name="line" placeholder="Your ID Line" />

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;
