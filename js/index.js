const router = new Router();

router.addPath('/', {
    text: 'home',
});

router.addPath('articles', {
    async: true,
    url: 'articles.html', 
});

router.addPath('aboutMe', {
    async: true,
    url: 'about_me.html', 
});

router.addPath('contact', {
    component: ContactComponent
});

