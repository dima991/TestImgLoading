import React from 'react';
import { useProgressiveImage } from '../customHooks/useProgressiveImage';
import BlurredImage from './BlurredImage';
import styles from './styles.module.css'

const ImageThumbnail = ({ url, onImageClick, prevImg }) => {
  const [src, loading] = useProgressiveImage(url);
  return (
    <div className={styles.container}>{loading ? <BlurredImage src={prevImg}  /> : <img src={src} alt={src} onClick={onImageClick} className={styles.img} />}</div>
  );
};

export default ImageThumbnail;
