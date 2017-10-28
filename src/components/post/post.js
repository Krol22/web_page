class Post extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        
        const template = this.currentDocument.querySelector('#post-component');
        this.innerHTML = template.innerHTML;

        this.postId = this.getAttribute('post-name');

        PostService.getPost(this.postId).then(res => {
            this.querySelectorAll('.post__text')[0].innerHTML = res;
        });
    }

}

Post.prototype.currentDocument = document.currentScript.ownerDocument;
customElements.define('post-component', Post);
