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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="./app/style.css">       
                <section class="bannerTienda" style="margin-top:00px">
                <div class="container">
                <h2> ${this.titulo}</h2>
                        <div class="row">
                            <div class="col col-md12 tienda">
                                <div class="card" style="width: 100%; border:none;text-align:center">
                                    <div class="card-body">
                                      
                                      <img width=100% src="${this.name}" alt="" class="smal">
                                    </div>
                                    <div class="card-footer tarjeta" style="border:none;background-color:#fff">
                                    <span id="small">${this.compra}</span>
                                    <button class="btn btn-danger">${this.boton}</button><p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        
     
     
                `;
        }
    }
}
customElements.define("my-menu", Mymenu);
export default Mymenu;
