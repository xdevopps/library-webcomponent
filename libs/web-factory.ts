
export enum ElementCode{
    HTMLElement,
    HTMLDivElement 
}

const GenericElement = [ 
    HTMLElement, 
    HTMLDivElement 
]
/**
 * 
 * @param typeElement 
 * @returns 
 */
 export function Web(typeElement: ElementCode) {
    return class extends GenericElement[typeElement]{
        __template: string;
        __props: any;
        __root: any; 
        isRender: boolean;
    
        constructor(){
            super();
            this.isRender = false;
            this.root = this.attachShadow({ mode : 'open'})
            this.__template =''
        }
    
        connectedCallback(){
            if(!this.isRender){
                this.root.innerHTML = this.template
                this.isRender = true;
            }
        }

        attributeChangedCallback(name: string, oldValue: any, newValue: any){
           if(newValue){
               this.props = newValue;
           }
        }
        
        static get observedAttributes(){
            return [
              'props',
            ]
        }

       

        get template(): string{
            return this.__template;
        }
    
        set template(value: string){
           this.__template = value;
        }
    
        get root(): any{
            return this.__root;
        }
    
        set root(value: any){
            this.__root = value;
        }

        get props(){
            return this.__props
        }
      
        set props(value: any){
            this.__props = value;
        }
    
    };
}