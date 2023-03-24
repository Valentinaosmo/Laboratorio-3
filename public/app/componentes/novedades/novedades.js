export var Attributesnov;
(function (Attributesnov) {
    Attributesnov["name"] = "name";
    Attributesnov["uid"] = "uid";
    Attributesnov["email"] = "email";
    Attributesnov["username"] = "username";
    Attributesnov["leermas"] = "leermas";
})(Attributesnov || (Attributesnov = {}));
class Mynovedades extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            email: null,
            username: null,
            leermas: null
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
            case Attributesnov.uid:
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
                <section class="tienda" style="margin-top:500px;margin-bottom:300px">       
                <div class="col col-sm-12" style="width:100%;padding-left:180px;padding-right:40px;border:none;">
                <div class="card" style="width: 22rem;float:left;display:inline-block;margin:5px;height:350px;border:none;">
                                <div class="card-body">
                                <img width=100% src="${this.name}" alt="" class="smal">
                                </div>
                                <div class="card-footer" style="background-color:#fff">
                                <small>${this.username}</small>
                                <h6>${this.email}</h6>
                                </div>
                             </div>
                             </div>
                <div class="col col-sm-12" style="width:100%;padding-left:100px;padding-right:30px;">
                </div>
      </section>
                `;
        }
    }
}
customElements.define("my-novedades", Mynovedades);
export default Mynovedades;
