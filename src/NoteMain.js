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
        flex-direction: row;
        flex-wrap: wrap;
        padding: 1rem;
        background: #cce4ce;
        /* background:url(https://subtlepatterns.com/patterns/little_pluses.png) #cacaca; */


      }

      @media only screen and (max-width: 600px)  {
        :host {
          flex-direction: column;
          /* flex-wrap: wrap; */

        }
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
