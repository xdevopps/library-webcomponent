import { ElementCode, Web } from "@/web"; 
import { render } from "./User.html"; 
export class User extends Web(ElementCode.HTMLElement) {
    constructor(){
        super() 

        this.template = render(
            {
                firstName:this.getAttribute('first-name') || '',
                lastName :this.getAttribute('last-name') || '',
                age :this.getAttribute('age') || '',
                userName :this.getAttribute('user-name') || '',
                email :this.getAttribute('email') || '',
                phone : this.getAttribute('phone') || '',
                picture :this.getAttribute('picture') || '' ,
        
        })
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

export default customElements.define('xd-user', User)