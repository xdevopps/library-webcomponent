/**
 *  register components
 */

import('./components/index.js').then((module)=>{
     Object.keys(module).forEach((el)=> {
       customElements.define(`xd-${el.toLowerCase()}`, module[el], { extends: "div" });
    })
})

