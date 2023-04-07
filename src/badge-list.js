import { LitElement, html, css } from "lit";
import "./badge-card.js"; 

export class BadgeList extends LitElement{
    static get tag(){
        return 'badge-list';
    }

    static get properties(){
        return{
            schoolBadges: {type: Array}
        }
    }

    constructor(){
        super(); 
        this.schoolBadges = [{
            "fieldName" : "Technology & Information",
             "title" : "APA Style: Introduction",
             "creatorName" : "Victoria Raish"
         },
         {
             "fieldName" : "Technology & Information",
              "title" : "APA Style: Introduction",
              "creatorName" : "Victoria Raish"
          }];
        this.updateBadges; 
    }

    static get styles(){
        return css`
        .wrapper{
            display: flex; 
            align-items: center;
            width: 900px; 
            height: 200px;

        }
        .item{
            display: inline-flex; 
            height: 120px; 
            width: 250px;
        }
        `
    }

    render(){
        return html`
       <div class="wrapper">
        ${this.schoolBadges.map(badge => html`
         <div class="item">
          <badge-card fieldName="${this.fieldName}" title="${this.title}"
          creatorName=${this.creatorName}></badge-card>
        </div>
        `)}
        </div>
       `;


    }
}
customElements.define(BadgeList.tag, BadgeList);
