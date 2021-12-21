import { Timer } from "types";

export class XdTimer extends HTMLElement {  
	timer: Timer;
	isRender: boolean;
	
	constructor(){
        super() 
		this.timer = {
			year: this.getAttribute('year') || undefined,
			month: this.getAttribute('month') || undefined,
			day: this.getAttribute('day') || undefined,
		}
		this.isRender = false;
    }

	render() {
	  let date = new Date(this.getAttribute('datetime') || Date.now());
	  this.innerHTML = new Intl.DateTimeFormat("default", this.timer as any).format(date);
	}

	connectedCallback(){
		if(!this.isRender){
			this.render()
			this.isRender = true;
		}
	}

	static get observedAttributes(){
		return [
			'datetime',
			'year',
			'month',
			'day',
			'hour',
			'minute',
			'second',
			'time-zone-name'
		]
	}

	attributeChangedCallback(name:any, oldValue: any, newValue: any){
			this.render()
	}
}