
interface ComponentType {
    templateUrl:  () => string | undefined,
    styleUrls?: Array<string>
}


export function Components() {
    return function(constructor: Function) {
        const propNames =  Object.getOwnPropertyNames(constructor.prototype)
        const isRender = propNames.includes('render') 
        let isAttributeSet = false; 

        constructor = function(){
            console.log(' hello')
        }
        
        /*
        if(isRender){
            constructor.prototype.attributeChangedCallback = function(name: string, oldValue: any, newValue: any){
                isAttributeSet = true;
                if(newValue){
                    Object.defineProperty(constructor.prototype, 'props', {
                        value: newValue
                    }); 

                    Object.defineProperty(constructor.prototype, 'template', {
                        value: constructor.prototype.render()
                    });
                }
            }

            if(!isAttributeSet){
                Object.defineProperty(constructor.prototype, 'template', {
                    value: constructor.prototype.render()
                });
            }
        }*/
        
    } 
}

export function Component(prefix?: string) {
    return (target: any) => {
        // Object.defineProperty(target.prototype, 'template', {
        //     value: target.prototype.render()
        // });
    };
}


export function Props(){ 
    let setter = (v: any) => {};
    let getter = () => {}

    return function(target: any, propertyKey: string) { 
        let value: string;

         target.attributeChangedCallback= function(name: string, oldValue: any, newValue: any){
            
            if(newValue){
                value = newValue;
                Object.defineProperty(target, 'template', {
                    value: target.render()
                });
            }
        }
        
        getter = function() {
            console.log('= ',value)
            return value;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}