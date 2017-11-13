class Navigation extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        const template = this.currentDocument.querySelector('#nav-component');
        this.innerHTML = template.innerHTML;

        this.navElements = this.querySelectorAll('router-link');

        Array.from(this.navElements).forEach(elem => {
            elem.addEventListener('click', (e) => {
                Array.from(this.navElements).forEach(element => element.classList.remove('active'));
                elem.classList.add('active');
            });
        });
    }

}

Navigation.prototype.currentDocument = document.currentScript.ownerDocument;
customElements.define('nav-component', Navigation);
