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
    totalHits: null,
    q: '',
    page: 1,
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

    const { q } = this.state;

    const imagesFromApi = await fetchImages({ q });

    this.setState({
      images: imagesFromApi.hits,
      totalHits: imagesFromApi.totalHits,
      isLoading: false,
    });
  };

  handleLoadMore = async () => {
    this.setState(prevState => ({
      isLoading: true,
      page: prevState.page + 1,
    }));

    const { q, page } = this.state;

    const imagesFromApi = await fetchImages({ q, page });

    this.setState(state => ({
      images: state.images.concat(imagesFromApi.hits),
      isLoading: false,
    }));
  };

  render() {
    const { images, totalHits } = this.state;
    const totalPages = Math.ceil(totalHits / 12);

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
          <ImageGalleryItem images={images} />
        </ImageGallery>
        {totalPages > 1 && <Button onLoadMore={this.handleLoadMore} />}
        {/* <Modal /> */}
      </div>
    );
  }
}
