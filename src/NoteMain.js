import { LitElement, html, css } from 'lit-element';
import './Note';

export class NoteMain extends LitElement {
  static get styles() {
    return css`
      :host { /* for space-data*/
        height: 100%;
        /* width: 100%; */
        /* background: lightblue; */
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background: #cce4ce;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

// window.customElements.define('my-notes', NoteMain);
