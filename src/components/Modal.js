import { Component } from 'react';
import css from './Styles.module.css';

export class Modal extends Component {
  render() {
    const { imageUrl, imageTags } = this.props;

    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={imageUrl} alt={imageTags} />
        </div>
      </div>
    );
  }
}
