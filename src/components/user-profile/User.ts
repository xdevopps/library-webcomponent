import { Base } from "@/templates";
import { User } from "types";

export class XdUser extends Base{
    user : User;
    isRender: boolean;

    constructor(){
        super()
        this.user = {
            firstName:this.getAttribute('first-name') || '',
            lastName :this.getAttribute('last-name') || '',
            age :this.getAttribute('age') || '',
            userName :this.getAttribute('user-name') || '',
            email :this.getAttribute('email') || '',
            phone : this.getAttribute('phone') || '',
            picture :this.getAttribute('picture') || '' ,
        }

        this.isRender = false;
    }

    connectedCallback(){
        if(!this.isRender){
			this.render();
			this.isRender = true;
		}
    }

    render(){
        this.innerHTML = this.template
    }


    get template(){
        return `
        <style>
            :host{
                margin: 2px;
                border:1px solid red;
                display:block;
                padding: 30px;
                width: calc(25% - 4px);
                box-sizing: border-box
            }
        </style>
           <img src="${this.user.picture}"/>
           <h1>${ this.user.firstName }</h1>
        `;
    }
    static get observedAttributes(){
		return [
			'first-name',
			'last-name',
			'age',
			'user-name',
			'email',
			'phone',
			'picture'
		]
	}
}