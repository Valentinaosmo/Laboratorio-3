export var Attributesmenu;
(function (Attributesmenu) {
    Attributesmenu["name"] = "name";
    Attributesmenu["uid"] = "uid";
    Attributesmenu["titulo"] = "titulo";
    Attributesmenu["compra"] = "compra";
    Attributesmenu["boton"] = "boton";
})(Attributesmenu || (Attributesmenu = {}));
class Mymenu extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            titulo: null,
            compra: null,
            boton: null
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, // lo mismo que oldValue
    newValue) {
        switch (propName) {
            case Attributesmenu.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/componentes/componente 2/componente2.css">
                
                `;
        }
    }
}
customElements.define("my-menu", Mymenu);
export default Mymenu;
