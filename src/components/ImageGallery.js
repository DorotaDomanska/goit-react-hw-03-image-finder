import { Component } from 'react';
import css from './Styles.module.css';

export class ImageGallery extends Component {
  render() {
    const { children } = this.props;

    return <ul className={css.imageGallery}>{children}</ul>;
  }
}
