const ContactComponent = new Component({
    content: `
        <div>
            <input type="text"/>
            test
        </div>
    `,
    selector: 'contact-form',
    script: function(element) {
        console.log("works");
    }
});