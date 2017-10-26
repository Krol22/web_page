const ContactComponent = new Component({
    content: `
        <h2>Contact me </h2>
        <p> You can email me directly on: krol22ee@gmail.com or you can use contact form to send me a message.</p>
        <form id="contact_form">

            <input class="form-input" 
                   placeholder="NAME" 
                   id="form_name" 
                   name="form_name" 
                   type="text" 
                   required/>
            <div class="error form_name_err_required">* Name field is required</div>

            <input class="form-input" 
                   placeholder="EMAIL" 
                   id="form_email" 
                   name="form_email" 
                   type="email" 
                   required/>
            <div class="error form_email_err_required">* Email field is required</div>
            <div class="error form_email_err_type">* Please type email</div>

            <textarea class="form-input form-message" 
                      id="form_message" 
                      name="form_message" 
                      required></textarea>
            <div class="error form_message_err_required">* Message field is required</div>
            <div class="form-footer">
                <button type="button">Send message</button>
            </div>
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