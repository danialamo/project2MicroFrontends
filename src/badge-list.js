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
        header{
            font-family: 'Montserrat', sans-serif;
            font-size: 25px;
        }
        .box1{
            margin-bottom: 20px;
            width: 1030px;
            height: 250px;
            background-color: #F7FAFC;
            border: 2px;
            border-radius: 5px;
            display: block; 
            justify-content: center;
        }
        p{
            font-family: 'Montserrat', sans-serif;
            font-size: 19px;
            padding-top: 15px;
            padding-left: 20px;
            padding-right: 20px;
        }
        
        .box2{
            width: 1030px;
            height: 250px; 
            background-color: #F7FAFC;
            border: 2px;
            border-radius: 5px;
            display: block;
            flex-direction: column;
        }
        hr.solid {
           border-top: 0.5px solid #bbb;
           width: 970px;
           margin-top: 5px;
        }
        .box2Text{
            padding-top: 15px;
        }

        .searchbox{
            background-color: #F7FAFC;
            box-shadow: 3.5px 3.5px 3px rgba(0, 0, 0, 0.3);
            width: 900px;
            height: 50px;
            margin-left: 40px;
            padding-left: 30px; 

        }
        .sectiontxt{
            display: flex;
            

        }
        `
    }

    render(){
      return html`
      <section class="box1">
        <p> Explore our content in a self-guided manner. Want us to guide you 
        through learning new skills? Try out Missions. Looking for other people
        with a similar focus? Find them in Groups. Interested in viewing all the options
        within a certain subject area? You can do that in Topics. 
        </p>
        <div class="searchbox">
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        </div>
        <div class="sectiontxt">
          <h5>ALL</h5>
          <h5>Missions</h5>
          <h5>Groups</h5>
          <h5>Badges</h5>
          <h5>People</h5>
          
        </div>
      </section>
      <div class="box2">
        <div class="section_header">
          <p class="box2Text">Looking for something brand spaking new? Here are the most recently added badges </p>
        </div>
        <hr class="solid">
        <div class= "wrapper">
        ${this.schoolBadges.map(badges => html`
        <div class="item">
          <badge-card fieldName="${badges.fieldName}" title="${badges.title}" creatorName="${badges.creatorName}"></badge-card>
        </div>
        `)}
      </div>
      ` }
}
customElements.define(BadgeList.tag, BadgeList);
