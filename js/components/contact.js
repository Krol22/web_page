const ContactComponent = new Component({
    content: `
        <form id="contact_form">
            <input id="form_name" name="form_name" type="text" required/>
            <div class="error form_name_err_required">Name field is required</div>
            <input id="form_email" name="form_email" type="email" required/>
            <div class="error form_email_err_required">Email field is required</div>
            <div class="error form_email_err_type">Please type email</div>
            <textarea id="form_message" name="form_message" required></textarea>
            <div class="error form_message_err_required">Message field is required</div>
            <button type="button">Submit form</button>
        </form>
    `,
    selector: 'contact-form',
    script: function (element) {
        const button = element.getElementsByTagName('button')[0];
        const form = document.getElementById('contact_form');

        Validator.initFormErrors(form);

        button.addEventListener('click', (e) => {
            e.preventDefault();

            if (!Validator.validateForm(form)) {
                return;
            }

            let data = {
                name: document.getElementById('form_name').value,
                email: document.getElementById('form_email').value,
                message: document.getElementById('form_message').value
            };

        });
    }
});