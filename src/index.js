Router.init();

Router.addPath('/', {
    text: '<blog-component></blog-component>',
});

Router.addPath('aboutMe', {
    url: 'about_me.html', 
});

Router.addPath('contact', { 
    text: '<contact-component></contact-component>'
});

Router.addPath('posts/{id}', {
    text: '<post-component></post-component>'
});

Router.goTo('/');

