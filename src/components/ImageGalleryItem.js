import { Component } from 'react';
import css from './Styles.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;

    return (
      <>
        {images.map(image => (
          <li key={image.id} className={css.imageGalleryItem}>
            <img
              className={css.imageGalleryItemImage}
              src={image.webformatURL}
              alt={image.tags}
            />
          </li>
        ))}
      </>
    );
  }
}
