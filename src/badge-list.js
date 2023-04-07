import { LitElement, html, css } from "lit";
import "./badge-card.js"; 

export class BadgeList extends LitElement{
    static get tag(){
        return 'badge-list';
    }

    static get properties(){
        return{
            badges: {type: Array}
        }
    }



    updateBadges(){
        const address = new URL('./api/badges.js', import.meta.url).href;
        fetch(address).then((response) => {
            if(response.ok){
                return response.json() 
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        }); 
        console.log(data); 
        
    }

    static get styles(){
        return css`
        .wrapper{
            outline: outline: 0.5px solid #58AEE9;
            display: flex; 
        }
        .item{
            display: inline-flex; 
        }
        `
    }

    render(){
        return html`
       <div class="wrapper">
        ${this.badges.map(badge => html`
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