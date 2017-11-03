class Blog extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const template = this.currentDocument.querySelector('#blog-component');
        this.innerHTML = template.innerHTML;

        this.render(Router.currentLocation.resolve.posts);
    }

    render(posts) {
        let section = this.querySelectorAll('#posts')[0];
        posts.sort((a, b) => {
                let dateA = new Date(a.date_added); 
                let dateB = new Date(b.date_added); 

                return dateB.getTime() - dateA.getTime();
            })
            .forEach(post => {
            let template = `
                <h3> ${post.title} </h3>
                <p class="post-short-text"> ${post.short_text} </p>
                <div class="on-hover-link"> 
                    <p> Read more </p>
                </div>
            `;    
            let newNode = this.currentDocument.createElement('article');
            newNode.innerHTML = template;
            this._addClickEvent(newNode, post);

            section.appendChild(newNode);
        });
    }

    _addClickEvent(postNode, post) {
        postNode.addEventListener('click', (event) => {
            event.preventDefault();
            Router.goTo(`posts/${post.file_name}`);
        });
    }
}

Blog.prototype.currentDocument = document.currentScript.ownerDocument;
customElements.define('blog-component', Blog);
