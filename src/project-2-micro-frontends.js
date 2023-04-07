import { LitElement, html, css } from 'lit';


class Project2MicroFrontends extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    
  `;

  constructor() {
   
  }

  render() {
    return html`
    <div class="buttons"> 
    <button class="duplicate">Duplicate card</button>
    <button class="changeTitle">Change Name</button>
    <button id="deletelastcard">Delete</button>
    <button data-toggle-btn>Toggle stats</button></button>
  </div>
      `
          
  }
}

customElements.define('project-2-micro-frontends', Project2MicroFrontends);