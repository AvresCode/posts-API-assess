import { LatestPosts } from '../components/LatestPosts';
import { CreatePostComponent } from '../components/CreatePostComponent';
export const HomePage = () => {
  return (
    <div>
      Homepage
      <div>
        <CreatePostComponent />
        <LatestPosts />
      </div>
    </div>
  );
};
