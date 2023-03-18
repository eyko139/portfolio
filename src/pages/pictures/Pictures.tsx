import axios from 'axios';
import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import { PhotoContainer } from './photoStyles';
import { Picture } from './types/Picture';

export const Pictures = () => {
  const [availableFiles, setAvailableFiles] = useState<Picture[]>([]);

  const click = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/pictures`, {
        auth: {
          username: 'test',
          password: 'test',
        },
      })
      .then((res) =>
        setAvailableFiles(
          res.data.map((picture: any) => ({
            src: picture.url,
            title: picture.title,
            width: 500,
            height: 500,
            selected: false,
          }))
        )
      );
  };
  const handleSend = () => {
    fetch(`${import.meta.env.VITE_API_URL}/pictures`, {
      method: 'POST',
      body: JSON.stringify(availableFiles),
    });
  };

  const handlePictureClick = (clickedPic: any) => {
    clickedPic.selected = !clickedPic.selected;
    setAvailableFiles(
      availableFiles.map((picture) => (picture.title === clickedPic.title ? clickedPic : picture))
    );
  };

  return (
    <div className='App'>
      <button onClick={click}>BUTTON</button>
      <ul>
        {availableFiles && (
          <PhotoAlbum
            renderPhoto={({ wrapperStyle, photo, renderDefaultPhoto }) => (
              <PhotoContainer selected={photo.selected}>
                {renderDefaultPhoto({ wrapped: true })}
              </PhotoContainer>
            )}
            onClick={({ index, photo }) => handlePictureClick(photo)}
            layout='rows'
            photos={availableFiles}
          />
        )}
      </ul>
      <button onClick={handleSend}> send </button>
    </div>
  );
};
