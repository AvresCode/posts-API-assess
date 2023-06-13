import { useState } from 'react';
import './CreatePostForm.css';

export const CreatePostForm = ({ createPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category_id, setCategoryId] = useState('');
  const [image, setImageURL] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageURL(file);
    }
  };

  const handleSubmit = async (e) => {
    console.log('submitted');
    e.preventDefault();

    console.log(title, content, category_id, image);
    createPost(title, content, category_id, image);
  };

  return (
    <div className="form-container">
      <h2> Create a New Post:</h2>
      <form onSubmit={handleSubmit} className="form-section">
        <label>Post Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content: </label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label>Category:</label>
        <input
          type="text"
          value={category_id}
          onChange={(e) => setCategoryId(e.target.value)}
        />

        <label>Header Image: </label>
        <input type="file" onChange={handleImageChange} />
        <button className="submit-button"> Submit</button>
      </form>
    </div>
  );
};
