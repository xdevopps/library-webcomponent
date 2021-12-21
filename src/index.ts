import { Utilities } from '@/helpers';

import('./components').then((module: any)=>{
    Object.keys(module).forEach((el)=> {
      customElements.define(Utilities.toKebabCase(el), module[el]);
   })
})
