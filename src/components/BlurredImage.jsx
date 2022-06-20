import React from 'react'
import styles from './styles.module.css'

const BlurredImage = ({
  src
}) => {
  console.log(src);
  return (
    <div className={styles.container}>
      <div className={styles.spinner}/>
     {src && <img
      src={src}
      alt="img"
      className={styles.img}
    />}
    </div>
  )
}

export default BlurredImage