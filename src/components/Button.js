import { Component } from 'react';
import css from './Styles.module.css';

export class Button extends Component {
  render() {
    return (
      <>
        <button className={css.button}></button>
      </>
    );
  }
}
