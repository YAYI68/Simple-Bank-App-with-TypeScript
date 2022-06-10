
export class Renderer{

    static viewTemple:HTMLDivElement;
    static renderer(html:string):void{
        Renderer.viewTemple.innerHTML = html;
    }
}