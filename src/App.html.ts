import { htmlParser } from "@/htmlParser";


export function renderTemplate(props:any) {
return htmlParser( `
    <div>${props}</div>
`);
} 