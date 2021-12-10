export class TemplateRender extends HTMLDivElement {

    constructor(){
        super()
        this.root = {}
    }

    render(template){
        this.root.innerHTML = template || this.template
    }

    connectedCallback(){
        if(!this.isRender){
            this.root = this.attachShadow({ mode : 'open'})
			this.render()
			this.isRender = true;
		}
    }

	attributeChangedCallback(name, oldValue, newValue){
        this.render()
    }

}