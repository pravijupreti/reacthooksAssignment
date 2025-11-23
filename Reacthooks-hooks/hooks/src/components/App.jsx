import { useState, useEffect } from 'react';
import MediaRow from './MediaRow';
import fetchData from '../api/fetchData';

function App() {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      // Fetch media items from API (CHANGED: was test.json before)
      const mediaItems = await fetchData(
        import.meta.env.VITE_MEDIA_API + '/media'
      );
      
      console.log('Media items fetched:', mediaItems);


      const mediaWithUsers = await Promise.all(
        mediaItems.map(async (item) => {
          try {
            const user = await fetchData(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id
            );
            // Combine media item with username
            return { ...item, username: user.username };
          } catch (error) {
            console.error('Error fetching user:', error);
            return { ...item, username: 'Unknown' };
          }
        })
      );

      console.log('Media with users:', mediaWithUsers);
      setMediaArray(mediaWithUsers);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div className="App">
      <h1>Media Gallery</h1>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
