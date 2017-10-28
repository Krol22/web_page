function Router(){
    this.routes = {};
    this.element = document.getElementsByTagName('router')[0];

    let linkElements = document.getElementsByTagName('a');
    Array.from(linkElements).filter(element => element.getAttribute('[link]'))
        .forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.goTo(element.getAttribute('[link]'));
            });
        });
}

Router.prototype.addPath = function(path, content) {
    if(this.routes[path]){
        throw new Error('Content in this path already exists!');
    }

    this.routes[path] = content;

    if(path === '/'){
        this.goTo(path);
    }
};

Router.prototype.goTo = function(path) {
    if(!this.routes[path]){
        throw new Error('Path not recognized!');
    }
    
    if(this.routes[path].component) {

        let component = this.routes[path].component;
        this.element.innerHTML = '<' + component.selector + '></' + component.selector + '>'
        System.refreshComponent(this.element, component);

    } else if(this.routes[path].async) {

        fetch(this.routes[path].url).then((response) => {
            return response.text();
        }).then((data) => {
            this.element.innerHTML = data; 
        });

    } else {
        this.element.innerHTML = this.routes[path].text;
    }
};