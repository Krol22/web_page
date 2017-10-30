const PostService = {
    getPostsMeta() {
        return fetch('static/posts/metadata.json').then(res => {
            return res.json();
        }).then(data => {
            return data;
        })
    
    },
    getPost(postId) {
        return fetch(`static/posts/${postId}.md`).then(res => { 
            return res.text();
        }).then(data => {
            return '<h3> Post </h3>';
        });
    }

};
