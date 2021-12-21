import { ElementCode, Web } from "@/web-factory"  


export class App extends Web(ElementCode.HTMLElement) {

  constructor(){
    super()
    console.log(' hello')
  }

}
 