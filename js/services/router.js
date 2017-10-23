function Router(){
    this.routes = {};
    this.element = document.getElementsByTagName('router')[0];

    let linkElements = document.getElementsByTagName('a');
    Array.from(linkElements).filter(element => element.getAttribute('[link]'))
        .forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.goTo(element.getAttribute('[link]'));
            })
        });
}

Router.prototype.addPath = function(path, content) {

    if(this.routes[path]){
        throw new Error('Content in this path already exists!');
    }
    this.routes[path] = content;
};

Router.prototype.goTo = function(path) {

    // check if async
    // get async, show loading

    if(!this.routes[path]){
        throw new Error('Path not recognized!');
    }

    if(this.routes[path].async) {
        fetch(this.routes[path].url).then((response) => {
            console.log(response);
        });
    } else {
        this.element.innerHTML = this.routes[path].text;
    }

};