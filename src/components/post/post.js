class Post extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const template = this.currentDocument.querySelector('#post-component');
        this.innerHTML = template.innerHTML;

        this.querySelectorAll('.post-text')[0].innerHTML = Router.currentLocation.resolve.post;
    }

}

Post.prototype.currentDocument = document.currentScript.ownerDocument;
customElements.define('post-component', Post);
