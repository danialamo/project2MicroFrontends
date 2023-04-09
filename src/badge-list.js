import { LitElement, html, css } from "lit";
import "./badge-card.js"; 
import "./search-widget.js";

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
        this.getSearchResults().then((results) => {
            this.schoolBadges = results;
        });
    }
    async getSearchResults(value = '') {
        const address = `/api/Badge?search=${value}`;
        const results = await fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            return data;
        });

        return results;
    }

    async _handleSearchEvent(e) {
        const term = e.detail.value;
        this.schoolBadges = await this.getSearchResults(term);
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
      <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
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
