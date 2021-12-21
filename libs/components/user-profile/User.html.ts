import { htmlParser } from "@/htmlParser";


export const render = ({ firstName, picture }: any) => 
    htmlParser( `
        <style>
            h1{
                color: red
            }
        </style>
        <h1>${ firstName }</h1>
        <img src="${picture}"/>`
    );
