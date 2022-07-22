import React from 'react';
import styles from './ProductItem.module.scss';
import { useNavigate } from 'react-router-dom';

function ProductItem({ name, description, image_url, id }) {
  const navigate = useNavigate();
  const clickToPage = (id) => {
    navigate(`/${id}`);
  };
  const shortDescription =
    description.length > 140 ? description.slice(0, 140) + '...' : description;

  return (
    <div className={styles.container} onClick={() => clickToPage(id)}>
      <div className={styles['image-container']}>
        <img
          src={image_url || 'https://bitsofco.de/content/images/2018/12/broken-1.png'}
          alt={name}
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{shortDescription}</p>
    </div>
  );
}

export default ProductItem;
