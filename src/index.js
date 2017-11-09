Router.init();

Router.addPath('/test', {
    text: '<blog-component></blog-component>',
	resolve: (currentLocation) => {
        return PostService.getPostsMeta().then(data => {
            currentLocation.resolve.posts = data.posts;
        });
	}
});

Router.addPath('/', {
    url: 'about_me.html', 
});

Router.addPath('contact', { 
    text: '<contact-component></contact-component>'
});

Router.addPath('posts/{id}', {
    text: '<post-component></post-component>',
    resolve: (currentLocation) => {
        return PostService.getPost(currentLocation.params.id).then(res => {
            currentLocation.resolve.post = res;
        });
    }
});

Router.goTo('/');

