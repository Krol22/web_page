const NavigationComponent = new Component({
    content: `
        <ul>
            <a href="#" [link]="/" class="active"><li>Home</li></a>
            <a href="#" [link]="articles"><li>Articles</li></a>
            <a href="#" [link]="aboutMe"><li>About me</li></a>
            <a href="#" [link]="contact"><li>Contact</li></a>
        </ul>
    `,
    selector: 'navigation',
    script: function(element) {
        let navigationElements = element.getElementsByTagName('a');

        Array.from(navigationElements).forEach(element => {
            element.addEventListener('click', (e) => {
                Array.from(navigationElements).forEach(element => element.classList.remove('active'));
                element.classList.add('active');
            });
        });
    }
});
