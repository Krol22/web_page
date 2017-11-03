const errValidityMap = {
    'valueMissing': '_err_required',
    'patternMismatch': '_err_pattern',
    'typeMismatch': '_err_type',
    'rangeOverflow': '_err_max_value',
    'rangeUnderflow': '_err_min_value',
    'stepMismatch': '_err_step',
    'tooLong': '_err_max_length',
    'tooShort': '_err_min_length'
}

const Validator = {
    initFormErrors: function(form) {
        Array.from(form.elements).forEach((field) => {
            hideAllErrors(form, field.name);
            field.addEventListener('input', (e) => {
                validateField(form, field);
            });
        });
    },
    validateForm: function(form) {
        let isValid = true;
        let formElements = Array.from(form.elements).filter(
            element => element.nodeName === 'INPUT' || 
            element.nodeName === 'TEXTAREA' || 
            element.nodeName === 'SELECT'
        );

        formElements.forEach(field => {
                if (!field.checkValidity()) {
                    isValid = false;
                }
            });

        if(!isValid){
            formElements.forEach(element => {
                validateField(form, element);
            });
        }

        return isValid;
    }
}

hideAllErrors = function(form, fieldName) {
    Object.values(errValidityMap).forEach(errorType => {
        let error = form.getElementsByClassName(`${fieldName}${errorType}`)[0];
        if(error) {
            error.style.display = 'none';
        }
    });
};

validateField = function(form, field){ 
    hideAllErrors(form, field.name);
    field.classList.remove('error-input');
    let founded = Object.keys(errValidityMap).find(key => {
        let error = form.getElementsByClassName(`${field.name}${errValidityMap[key]}`)[0];
        if(field.validity[key] && error) {
            error.style.display = 'inline-block';
            return true;
        }
        return false;
    });

    if(founded) {
        field.classList.add('error-input');
    }
}
