import { useState, useEffect } from 'react';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_MEDIA_API + '/media');
      
      if (!response.ok) {
        throw new Error('Failed to fetch media');
      }
      
      const data = await response.json();
      setMediaArray(data);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return { mediaArray };
};

export { useMedia };
