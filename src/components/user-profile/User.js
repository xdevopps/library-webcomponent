import { TemplateRender } from '../../helpers/template.js'

export class User extends TemplateRender{

    constructor(){
        super()

        this.firstName = this.getAttribute('first-name') || ''
        this.lastName = this.getAttribute('last-name') || ''
        this.age = this.getAttribute('age') || ''
        this.userName =  this.getAttribute('user-name') || ''
        this.email =  this.getAttribute('email') || ''
        this.phone =  this.getAttribute('phone') || ''
        this.picture =  this.getAttribute('picture') || '' 

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
           <img src="${this.picture}"/>
           <h1>${ this.firstName }</h1>
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