import { Component } from 'react';
import css from './Styles.module.css';

export class Searchbar extends Component {
  onSubmit = evt => {
    evt.preventDefault();
    const { onFetchImages } = this.props;

    onFetchImages();
  };

  handleInput = evt => {
    const text = evt.target.value;
    const { onInputChange } = this.props;

    onInputChange(text);
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
