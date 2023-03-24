export var Attributesnov2;
(function (Attributesnov2) {
    Attributesnov2["name"] = "name";
    Attributesnov2["uid"] = "uid";
    Attributesnov2["email"] = "email";
    Attributesnov2["username"] = "username";
    Attributesnov2["nintendo"] = "nintendo";
    Attributesnov2["titulo"] = "titulo";
})(Attributesnov2 || (Attributesnov2 = {}));
class Mynovedades2 extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            email: null,
            username: null,
            nintendo: null,
            titulo: null
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
            case Attributesnov2.uid:
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
                <section class="novedades2" style="margin-top:50px;">      
                <div class="col col-sm-12" style="width:100%;padding-left:180px;padding-right:40px;border:none">
                <div class="card" style="width: 22rem;float:left;display:inline-block;margin:5px;height:400px;border:none">
                                <div class="card-body">
                                
                                <img width=100% src="${this.name}" alt="" class="smal">
                                </div>
                                <h6>  ${this.titulo}</h6>
                                <div class="card-footer" style="background-color:none">
                                <small>${this.username}</small>
                                <h6>${this.email}</h6>
                                <h6>${this.nintendo}</h6>
                                </div>
                             </div>
                             </div>
</div>      
                `;
        }
    }
}
customElements.define("my-novedades2", Mynovedades2);
export default Mynovedades2;
