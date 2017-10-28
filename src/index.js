const router = new Router();

router.addPath('/', {
    text: '<blog-component></blog-component>',
});

router.addPath('aboutMe', {
    async: true,
    url: 'about_me.html', 
});

router.addPath('contact', {
    text: '<contact-component></contact-component>'
});

