import './App.css';
import React from 'react';
import ImageThumbnail from './components/ImageThumbnail';
import { useAsync } from './customHooks/useAsync';
import { getRandomImage } from './services/requests';
import BlurredImage from './components/BlurredImage';

function App() {
  const { data, status, run, error } = useAsync();
  const [prevImg, setPrevImg] = React.useState();

  React.useEffect(() => {
    run(getRandomImage());
  }, [run]);

  React.useEffect(() => {
    if(status === 'resolved') setPrevImg(data.urls.thumb)
  }, [status]);

  const render = () => {
    switch (status) {
      case 'idle':
      case 'pending': return <BlurredImage src={prevImg} />;
      case 'resolved':
        return <ImageThumbnail url={data.urls.thumb} onImageClick={() => run(getRandomImage())} prevImg={prevImg} />;
      case 'error':
        return <div role="alert">{error.message}</div>;
      default:
        throw new Error(`There isno case with ${status}. Error!`);
    }
  };

  return <div>{render()}</div>;
}

export default App;
