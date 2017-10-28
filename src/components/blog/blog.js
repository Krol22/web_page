class Articles extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const template = this.currentDocument.querySelector('#blog-component');
        const instance = template.content.cloneNode(true);

        shadowRoot.appendChild(instance);
    }
    
}

Articles.prototype.currentDocument = document.currentScript.ownerDocument;

customElements.define('blog-component', Articles);
