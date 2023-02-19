import { Component } from 'react';
import css from './Styles.module.css';

export class Button extends Component {
  render() {
    const { onLoadMore } = this.props;

    return (
      <>
        <button className={css.button} onClick={onLoadMore}>
          Load more
        </button>
      </>
    );
  }
}
