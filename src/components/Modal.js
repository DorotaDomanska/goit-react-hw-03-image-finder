import { Component } from 'react';
import css from './Styles.module.css';

export class Modal extends Component {
  closeModal = () => {
    const { onCloseModal } = this.props;
    onCloseModal();
  };

  render() {
    const { imageUrl, imageTags } = this.props;

    return (
      <div className={css.overlay} onClick={this.closeModal}>
        <div className={css.modal}>
          <img src={imageUrl} alt={imageTags} />
        </div>
      </div>
    );
  }
}
