import { LitElement, html, css } from 'lit-element';

class Note extends LitElement {
  static get styles() {
    return css`

      :host {
        margin: 1rem;
      }

      div{
        display:inline-block;
        position:relative;
      }

      span {
        position:absolute;
        top:-10px;
        right:10px;
        font:48px 'Gloria Hallelujah', cursive;
        color: rgb(185, 55, 55);
      }
      span:hover {
        color: rgb(122, 155, 252);
      }

      textarea {
        display:block;
        padding:40px 40px 40px;
        width:200px;
        height:200px;
        font:20px 'Gloria Hallelujah', cursive;
        line-height:1.5;
        border:0;
        border-radius:3px;
        background: linear-gradient(#F9EFAF, #F7E98D);
        box-shadow:0 10px 10px rgba(0,0,0,0.1);
        overflow:hidden;
        transition:box-shadow 0.5s ease;
        font-smoothing:subpixel-antialiased;
        /* max-width:520px;
        max-height:250px; */
      }
      textarea:hover { box-shadow:0 5px 8px rgba(0,0,0,0.15); }
      textarea:focus { box-shadow:0 5px 12px rgba(0,0,0,0.2); outline:none; }


    `;
  }

  static get properties() {
    return {
      text: { type: String },
      id: {type: Number}
    };
  }

  render() {
    return html`
      <div>
        <textarea @focusout=${this.save(this.value)}>${this.text}</textarea>
        <span class="close" @click=${this.deleteNote}>&times;</span>
      </div>
    `;
  }

  deleteNote() {
    const notes = this.read();
    this.write(notes.splice(this.id, 1));
    // this.parent

  }
  save(data) {
    const notes = this.read();
    const note = {id: this.id, text: data};
    notes.push(note);
    this.write(notes);
  }

  read() {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes === null ? [] : notes;
  }

  write(data) {
    localStorage.setItem('notes', JSON.stringify(data));
  }



}

window.customElements.define('my-note', Note);
