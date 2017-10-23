const router = new Router();

router.addPath('home', {
    text: 'home',
});

router.addPath('articles', {
    async: true,
    url: 'articles.html', 
});

router.addPath('aboutMe', {
    text: 'aboutMe',
});

router.addPath('contact', {
    text: 'contact',
});
