Element.prototype.getElementsByAttribute = function(attributeName) {
    let matchedElements = [];
    let allElements = this.getElementsByTagName('*');
    Array.from(allElements).forEach(element => {
        if(element.getAttribute(attributeName) !== null) {
            matchedElements.push(element);
        }
    });

    return matchedElements;
};