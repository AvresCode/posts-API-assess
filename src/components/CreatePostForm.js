import { useState } from 'react';

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
    <div>
      <h2> Create a New Post:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Post Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category_id}
            onChange={(e) => setCategoryId(e.target.value)}
          />
        </label>
        <label>
          Header Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <button> Submit</button>
      </form>
    </div>
  );
};
