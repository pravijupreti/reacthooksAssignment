import { useState } from 'react';
import { useMedia } from '../hooks/apiHooks';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const { mediaArray } = useMedia();

  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Filename</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((mediaItem) => (
            <MediaRow
              key={mediaItem.media_id}
              item={mediaItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
