const PostService = {
    getPostsMeta() {
        return fetch('/static/posts/metadata.json').then(res => {
            return res.json();
        }).then(data => {
            return data;
        })
    
    },
    getPost(postId) {
        return fetch(`/static/posts/${postId}.md`).then(res => { 
            return res.text();
        }).then(data => {
			const converter = new showdown.Converter();
            return converter.makeHtml(data);
        });
    }

};
