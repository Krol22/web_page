class Blog extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const template = this.currentDocument.querySelector('#blog-component');
        this.innerHTML = template.innerHTML;

        PostService.getPostsMeta().then(data => {
            this.render(data);
        });
    }

    render(data) {
        let section = this.querySelectorAll('#posts')[0];
        data.posts
            .sort((a, b) => {
                let dateA = new Date(a.date_added); 
                let dateB = new Date(b.date_added); 

                return dateB.getTime() - dateA.getTime();
            })
            .forEach(post => {
            let template = `
                <h3> ${post.title} </h3>
                <p> ${post.file_name} </p>
                <router-link [link]="posts/${post.file_name}"> Read more </router-link>
            `;    
            let newNode = this.currentDocument.createElement('article');
            newNode.innerHTML = template;

            section.appendChild(newNode);
        });
    }
    
}

Blog.prototype.currentDocument = document.currentScript.ownerDocument;

customElements.define('blog-component', Blog);
