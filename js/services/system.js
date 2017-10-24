const System = {
    components: [],
    addComponent: function(newComponent){
        this.components.push(newComponent);
        newComponentElements = document.getElementsByTagName(newComponent.selector);
        Array.from(newComponentElements).forEach((element) => {
            element.innerHTML = newComponent.content;
            newComponent.script(element);
        });
    },
    refreshComponent: function(element, component){
        element.children[0].innerHTML = component.content;
        component.script(element);
    }
};