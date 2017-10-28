class Contact extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const template = this.currentDocument.querySelector('#contact-component');
        const instance = template.content.cloneNode(true);

        shadowRoot.appendChild(instance);

        this.button = shadowRoot.querySelectorAll('button')[0];
        this.contactForm = shadowRoot.querySelectorAll('form')[0];

        Validator.initFormErrors(this.contactForm);
        this.button.addEventListener('click', this.onSubmitForm);
    }

    onSubmitForm(event) {
        event.preventDefault();

        if (!Validator.validateForm(this.contactForm)) {
            return;
        }
    }
    
}

Contact.prototype.currentDocument = document.currentScript.ownerDocument;
customElements.define('contact-component', Contact);
