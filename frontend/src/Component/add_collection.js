import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddCollectionForm.css';
import logoImage from './images/logo.png';
import profileImage from './images/image 9.png';

const AddCollectionForm = () => {
  const [collectionName, setCollectionName] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');
  const [collectionPrice, setCollectionPrice] = useState('');
  const [collectionWeight, setCollectionWeight] = useState('');
  const [collectionStatus, setCollectionStatus] = useState('');
  const [collectionImages, setCollectionImages] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('collectionName', collectionName);
    formData.append('collectionDescription', collectionDescription);
    formData.append('collectionPrice', collectionPrice);
    formData.append('collectionWeight', collectionWeight);
    formData.append('collectionStatus', collectionStatus);

    for (let i = 0; i < collectionImages.length; i++) {
      formData.append('collectionImages', collectionImages[i]);
    }

    try {
      const response = await fetch('http://localhost:8000/create', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add collection');
      }

      const result = await response.json();
      console.log(result);
      alert('Add successful');
      // Redirect to profile page after successful addition
      window.location.href = '/profile';
    } catch (error) {
      console.error(error);
      alert('Failed to add collection');
    }

    setCollectionName('');
    setCollectionDescription('');
    setCollectionPrice('');
    setCollectionWeight('');
    setCollectionStatus('');
    setCollectionImages([]);
  };

  const handleImageUpload = (files) => {
    const updatedImages = [...collectionImages];
    for (let i = 0; i < files.length; i++) {
      updatedImages.push(files[i]);
    }
    setCollectionImages(updatedImages);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...collectionImages];
    updatedImages.splice(index, 1);
    setCollectionImages(updatedImages);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="#">หน้าแรก</a>
          </li>
          <li>
            <a href="#">ประวัติ</a>
          </li>
          <li>
            <a href="#">ผลิตภัณฑ์</a>
          </li>
          <li>
            <a href="#">ความรู้เกี่ยวกับเหรียญกษาปณ์</a>
          </li>
          <li className="profile">
            <a href="#">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </a>
          </li>
          <ul className="logout">
            <button className="logout-button">Log out</button>
          </ul>
        </ul>
      </nav>

      <form className="add-collection-form" onSubmit={handleFormSubmit} enctype="multipart/form-data">
        <h2>Add Collection</h2>
        <div className="form-group">
          <label>Uploaded Images:</label>
          <ul>
            {collectionImages.map((image, index) => (
              <li key={index}>
                <img src={URL.createObjectURL(image)} alt={`Image ${index}`} className="uploaded-image" />
                <button onClick={() => handleImageDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="form-group">
          <label>Collection Name:</label>
          <input type="text" name="collectionName" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Collection Description:</label>
          <textarea name="collectionDescription" value={collectionDescription} onChange={(e) => setCollectionDescription(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" name="collectionPrice" value={collectionPrice} onChange={(e) => setCollectionPrice(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Weight:</label>
          <input type="text" name="collectionWeight" value={collectionWeight} onChange={(e) => setCollectionWeight(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="collectionStatus" value={collectionStatus} onChange={(e) => setCollectionStatus(e.target.value)} required>
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
          </select>
        </div>
        <div className="form-group">
          <label>Upload Images:</label>
          <input type="file" name="collectionImages" multiple onChange={(e) => handleImageUpload(e.target.files)} />
        </div>
        <button type="submit">Add Collection</button>
      </form>
    </div>
  );
};

export default AddCollectionForm;
