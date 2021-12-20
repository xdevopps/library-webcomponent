import('./components').then((module: any)=>{
    Object.keys(module).forEach((el)=> {
      customElements.define(`xd-${el.toLowerCase()}`, module[el]);
   })
})
