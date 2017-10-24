const Component = function(config) {
    this.content = config.content;
    this.script = config.script;
    this.selector = config.selector;

    System.addComponent(this);
};