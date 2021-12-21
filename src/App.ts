import { ElementCode, Web } from "@/web" 
import { Component } from "@/functions/decorators"


export class App extends Web(ElementCode.HTMLElement) {
    constructor(){
      super()
      this.template = this.render()
    }
    
    render(){
      console.log(2)
        return `
          <h1> hello ${ this.props } </h1>
        `
    }

}
 