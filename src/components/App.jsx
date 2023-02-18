import { Component } from 'react';
import { Searchbar } from './Searchbar';
// import { Loader } from './Loader';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
// import { Modal } from './Modal';
import { fetchImages } from './api/fetchImages.js';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
    key: '31924475-938fe2c560f7db586b0b43322',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    page: 1,
    per_page: 12,
  };

  handleChange = text => {
    this.setState({
      q: text,
    });
  };

  handleRequest = async () => {
    this.setState({
      isLoading: true,
    });

    const { key, q, image_type, orientation, per_page } = this.state;

    const imagesFromApi = await fetchImages({
      key,
      q,
      image_type,
      orientation,
      per_page,
    });

    this.setState({
      images: imagesFromApi.hits,
      isLoading: false,
    });
  };

  render() {
    const { images } = this.state;
    const totalPages = Math.ceil(images.totalHits / 12);

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
        <Searchbar
          onInputChange={this.handleChange}
          onFetchImages={this.handleRequest}
        />
        {/* <Loader /> */}
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} />
        </ImageGallery>
        {totalPages > 1 && <Button />}
        {/* <Modal /> */}
      </div>
    );
  }
}
