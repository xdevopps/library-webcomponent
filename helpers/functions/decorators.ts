
export function Components() {
    return function(constructor: Function) {} 
}

export function Component(prefix?: string) {
    return (target: any) => {};
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