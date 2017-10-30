const Router = {
    /*
     * content can be static html or component
    */
    
    init: function() {
        this.routes = {};
        this.element = document.getElementsByTagName('router')[0];
    },
    addPath: function(path, content){
        if(this.routes[path]){
            throw new Error('Content in this path already exists!');
        }

        this.routes[path] = content;
    },
    goTo: function(path) {
        let route = findRoute(path);

        if(!this.routes[route.path]) {
            throw new Error('Path not recognized!');
        }

        this.currentLocation = route; 

        if(this.routes[route.path].url) {
            fetch(this.routes[route.path].url).then((response) => {
                return response.text();
            }).then((data) => {
                this.element.innerHTML = data; 
            });
        } else {
            this.element.innerHTML = this.routes[route.path].text;
        }
        
    }
}

function findRoute(path) {
    let pathElements = path.split("/");
    let parameters = {};

    let match = Object.keys(Router.routes).find(routerPath => {
        let routerPathElements = routerPath.split("/");

        if(pathElements.length !== routerPathElements.length){
            return false;
        }

        for(let i = 0; i < pathElements.length; i++) {
            if(routerPathElements[i].substring(0,1) === '{' && 
                routerPathElements[i].substring(routerPathElements[i].length - 1, routerPathElements[i].length) === '}') {

                let paramName = routerPathElements[i].substring(1, routerPathElements[i].length - 1);
                parameters[paramName] = pathElements[i];
                continue;
            } 
            
            if(routerPathElements[i] !== pathElements[i]) {
                return false;
                break;
            }
        }


        return true;
    });

    return {
        path: match,
        params: parameters
    };
}
