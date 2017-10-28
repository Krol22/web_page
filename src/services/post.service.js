const PostService = {
    getPost(postId) {
        return fetch(`static/posts/${postId}.md`).then(res => { 
            return res.text();
        }).then(data => {
            console.log('translate from md to html');
            return '<h3> Post </h3>';
        });
    }

};
