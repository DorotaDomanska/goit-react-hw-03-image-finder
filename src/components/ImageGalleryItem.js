import { Component } from 'react';
import css from './Styles.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.imageGalleryItem}>
        <img className={css.imageGalleryItemImage} src="" alt="" />
      </li>
    );
  }
}
