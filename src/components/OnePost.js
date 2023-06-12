import './OnePost.css';

export const OnePost = ({ id, img_url, title, content }) => {
  const imagePath = 'https://frontend-case-api.sbdev.nl/storage/';
  return (
    <div key={id} className="onePost-container">
      <img src={imagePath + img_url} alt={title} className="post-image" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
