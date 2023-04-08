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
            border-radius: 3px;
            border-left: 0.8rem solid #58AEE9;
            width: 230px; 
            height: 140px; 
            background-color: #F7FAFC; 
            outline: 0.5px solid #58AEE9;
            
          }
          .field{
            text-align:left; 
            width: 230px; 
            height: 30px; 
            background-color: lightblue;
          }
            
          }
          .content{
            text-align:left; 
            display: block; 

          }
          
          p{
            font-size: 12.5px;
          }

          .fieldtxt{
            padding-top: 5px; 
            padding-left: 4px;
          } 
          
          .creator{
            padding-left: 4px;
          }

          h3{
            padding-left: 4px;
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
          </div>
            <p class="creator">Creator: ${this.creatorName}</p>
        </div> 
        `
    }
}
customElements.define('badge-card', BadgeCard); 