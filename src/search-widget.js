import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class SearchWidget extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    }
  }

  static get styles() {
    return css`
    host:{
      display: block;
    }
    simple-icon {
      display: inline-block;
      --simple-icon-height: 25px;
      --simple-icon-width: 25px;
    }
    input{
      border:none;
      font-family: 'Montserrat', sans-serif;
      width: 300px;
      height: 45px;
      background-color: #F7FAFC;
    }
    `;
  }

  constructor() {
    super();
    this.value = 'Search Content, Topics, and People';
  }

  render() {
    return html`
     <simple-icon icon="icons:search"></simple-icon>
      <input type="text" value="${this.value}" @input="${this._handleInput}"/>
    `;
  }
  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: {
        value: this.value,
      }
    }));
  }
}

customElements.define('search-widget', SearchWidget);