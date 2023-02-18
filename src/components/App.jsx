import { Component } from 'react';
import { Searchbar } from './Searchbar';
// import { Loader } from './Loader';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
// import { Button } from './Button';
// import { Modal } from './Modal';
import { fetchImages } from './api/fetchImages.js';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
  };

  handleRequest = async params => {
    this.setState({
      isLoading: true,
    });

    const images = await fetchImages(params);
    console.log(images);
    this.setState({
      isLoading: false,
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onFetchImages={this.handleRequest} />
        {/* <Loader /> */}
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        {/* <Button />
      <Modal /> */}
      </div>
    );
  }
}
