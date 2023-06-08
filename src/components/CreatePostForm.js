import { useState } from 'react';

export const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <h2> Create a New Post:</h2>
      <form>
        <label>
          Post Title: <input type="text" />
        </label>
        <label>
          Category: <input type="text" />
        </label>
        <label>
          Header Image: <input type="text" />
        </label>
        <label>
          Content: <input type="text" />
        </label>
        <button> Submit</button>
      </form>
    </div>
  );
};
