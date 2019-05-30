import { LitElement, html, css } from 'lit-element';

class Note extends LitElement {
  static get styles() {
    return css`
      :host { /* for space-data*/
        background: #bdcebe;
        padding: 1rem;
        margin: 0.5rem;
        height: max-content;
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String }
    };
  }

  render() {
    return html`
      <div><output>${this.text}</output></div>
    `;
  }
}

window.customElements.define('my-note', Note);
