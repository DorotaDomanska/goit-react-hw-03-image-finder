import { Component } from 'react';
import { Modal } from './Modal';
import css from './Styles.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    imgUrl: '',
    imgTags: '',
  };

  openModal = evt => {
    const { images } = this.props;

    const imageId = evt.target.id;
    const selectedImg = images.find(image => image.id === Number(imageId));

    this.setState({
      isModalOpen: true,
      imgUrl: selectedImg.largeImageURL,
      imgTags: selectedImg.tags,
    });
  };

  render() {
    const { images } = this.props;
    const { isModalOpen, imgUrl, imgTags } = this.state;

    return (
      <>
        {images.map(image => (
          <li key={image.id} className={css.imageGalleryItem}>
            <img
              id={image.id}
              className={css.imageGalleryItemImage}
              src={image.webformatURL}
              alt={image.tags}
              onClick={this.openModal}
            />
          </li>
        ))}
        {isModalOpen && <Modal imageUrl={imgUrl} imageTags={imgTags} />}
      </>
    );
  }
}
