import { Component } from 'react';
import css from './Styles.module.css';

export class Searchbar extends Component {
  state = {
    key: '31924475-938fe2c560f7db586b0b43322',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    page: 1,
    per_page: 12,
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { onFetchImages } = this.props;
    const { key, q, image_type, orientation, page, per_page } = this.state;
    onFetchImages({
      key,
      q,
      image_type,
      orientation,
      page,
      per_page,
    });
  };

  handleInput = evt => {
    this.setState({
      q: evt.target.value,
    });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
