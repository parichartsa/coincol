import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import logoImage from './images/logo.png';
import ProfileImage from './images/image 13.png';
import ProfileImage2 from './images/image 8.png';
import Modal from 'react-modal';

function ProfilePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [isPublic, setIsPublic] = useState(false);
  const [collections, setCollections] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    detail: '',
    weight: '',
    status: 'available',
    image: null,
  });
  const [isEditing, setIsEditing] = useState(false); // เพิ่มสถานะการแก้ไขโปรไฟล์

  const openModal = (post) => {
    setCurrentPost(post);
    setFormData({
      title: post ? post.title : '',
      price: post ? post.price : '',
      detail: post ? post.detail : '',
      weight: post ? post.weight : '',
      status: post ? post.status : 'available',
      image: post ? post.image : null,
    });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentPost(null);
    setIsPublic(false);
    setFormData({
      title: '',
      price: '',
      detail: '',
      weight: '',
      status: 'available',
      image: null,
    });
    setModalIsOpen(false);
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      image: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handlePublicCheckbox = () => {
    setIsPublic(!isPublic);
  };

  const handleAddCollection = () => {
    const newCollection = {
      title: formData.title,
      price: formData.price,
      detail: formData.detail,
      weight: formData.weight,
      status: formData.status,
      image: formData.image,
    };

    if (currentPost) {
      const updatedCollections = collections.map((collection) =>
        collection === currentPost ? newCollection : collection
      );
      setCollections(updatedCollections);
    } else {
      setCollections([...collections, newCollection]);
    }

    closeModal();
  };

  const handleEditCollection = () => {
    setIsEditing(true);
    openModal(currentPost);
  };

  const handleDeleteCollection = (index) => {
    const updatedCollections = [...collections];
    updatedCollections.splice(index, 1);
    setCollections(updatedCollections);
    closeModal();
  };

  const handleEditProfile = () => {
    setIsEditing(true); // เปิดโหมดแก้ไข
  };

  const handleSaveProfile = () => {
    // ทำการบันทึกการเปลี่ยนแปลงข้อมูลโปรไฟล์
    setIsEditing(false); // ปิดโหมดแก้ไข
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <ul>
          <li><Link to="/home">หน้าแรก</Link></li>
          <li><Link to="/profile">ผลิตภัณฑ์</Link></li>
          <li><Link to="/knowledge">การดูแลรักษา</Link></li>
          <li className="signup-box">
            <Link to="/" className="signup-button">Log out</Link>
          </li>
        </ul>
      </nav>
      <div className="profile-container">
        <div className="profile">
          <img className="profile-picture" src={ProfileImage2} alt="Profile" />
          <h1 className="username">Parisee</h1>
          <p className="bio">
              @Parisee
          </p>
          <p className="bio">
              CONTACT FOR PURCHASE:
              0615230109(คุณยี่)
          </p>
          <div className="button-container">
            {isEditing ? (
              <button className="save-profile-button" onClick={handleSaveProfile}>
                Save Profile
              </button>
            ) : (
              <>
                <button className="add-photo-button" onClick={() => openModal(null)}>
                  Add Collection
                </button>
                <button className="edit-profile-button" onClick={handleEditProfile}>
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="post-container">
        {collections.map((collection, index) => (
          <div className="post" key={index}>
            <a href="#" onClick={() => openModal(collection)}>
              <img className="post-image" src={collection.image} alt="Post" />
              <div className="post-overlay">
                <p className="post-caption">{collection.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Post Modal"
        className="post-modal"
      >
        {currentPost && !isEditing && (
          <div className="post-modal-content">
            <img className="modal-image" src={currentPost.image} alt="Post" />
            <div className="modal-details">
              <p className="modal-caption">{currentPost.title}</p>
              <p className="modal-price">Price: {currentPost.price}</p>
              <p className="modal-detail">Detail: {currentPost.detail}</p>
              <p className="modal-weight">Weight: {currentPost.weight}</p>
              <p className="modal-status">Status: {currentPost.status}</p>
            </div>
            <div className="modal-buttons">
              <button onClick={handleEditCollection} className="modal-edit-button">
                Edit
              </button>
              <button
                className="modal-delete-button"
                onClick={() => handleDeleteCollection(collections.indexOf(currentPost))}
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {(!currentPost || isEditing) && (
          <div className="post-modal-content">
            {isEditing ? <h2>Edit Collection</h2> : <h2>Add Collection</h2>}
            <form className="post-form">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                required
              />
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                required
              />
              <label>Detail</label>
              <textarea
                name="detail"
                value={formData.detail}
                onChange={handleFormChange}
                required
              ></textarea>
              <label>Weight</label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleFormChange}
                required
              />
              <label>Status</label>
              <select name="status" value={formData.status} onChange={handleFormChange} required>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
              </select>
              <label>Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required={!isEditing}
              />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="public"
                  checked={isPublic}
                  onChange={handlePublicCheckbox}
                />
                <label>Make Collection Public</label>
              </div>
              <div className="modal-buttons">
                <button className="modal-save-button" onClick={handleAddCollection}>
                  {isEditing ? 'Save' : 'Add'}
                </button>
                <button className="modal-cancel-button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ProfilePage;
