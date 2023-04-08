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
        this.schoolBadges = [];
        this.updateBadges(); 
    }

    updateBadges(){
        const address = '../api/Badge'
        const data =  fetch(address).then((response) => {
            if(response.ok){
                return response.json() 
            }
            return [];
        })
        .then((data) => {
            this.schoolBadges = data;
        }); 
        console.log(data); 

    }

    static get styles(){
        return css`
        .wrapper{
            display: flex; 
            align-items: first baseline;
            width: 1000px; 
            height: 200px;
            justify-content: space-between; 
            padding-left: 10px; 

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
      <div class= "wrapper">
       ${this.schoolBadges.map(badges => html`
       <div class="item">
         <badge-card fieldName="${badges.fieldName}" title="${badges.title}" creatorName="${badges.creatorName}"></badge-card>
       </div>
       `)}
      `
    }
}
customElements.define(BadgeList.tag, BadgeList);
