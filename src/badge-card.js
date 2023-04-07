import { LitElement, html, css } from "lit";


export class BadgeCard extends LitElement{
    static get properties(){
       return{
        fieldName: {
            type: String,
        },
        title: {
            type: String, 
        },
        creatorName: {
            type: String,
        },
        symbolImg: {
            type: String,
        }
       }

    }

    constructor(){
        super(); 
        this.fieldName = "Technology & Information";
        this.title = "APA Style: Introduction"; 
        this.creatorName = "Victoria Raish";
    }

    static get styles(){
        return css`
        .wrapper{
            margin: 100px;
            border-radius: 3px;
            border-left: 0.8rem solid #58AEE9;
            width: 250px; 
            height: 120px; 
            background-color: #F7FAFC; 
            outline: 0.5px solid #58AEE9;
            
          }
          .field{
            text-align: left; 
            width: 280px; 
            height: 30px; 
            background-color: lightblue;
          }
            
          }
          .content{
            width: 100px; 
            height: 70px; 
            text-align: left;
            padding: 6px; 
          }
          
          .fieldtxt{
            padding: 6px;
            
          }
          p{
            font-size: 13.5px;
          }
          .creator{
            padding-bottom: 5px;
            padding-left: 6px; 
          }
          h3{
            padding: 6px;
          }
          .image{
            height: 40px; 
            width: 40px; 
          }
       
        `
    }

    render(){
        return html`
        <div class="wrapper">
          <div class="field">
            <p class="fieldtxt">${this.fieldName}</p>
          </div>
          <div class="content">
            <h3>${this.title}</h3>
            <p class="creator">Creator: ${this.creatorName}</p>
          </div>
        </div> 
        `
    }


}
customElements.define('badge-card', BadgeCard); 