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
            hideAllErrors(field.name);
            field.addEventListener('input', (e) => {
                validateField(field);
            });
        });
    },
    validateForm: function(form) {
        let isValid = true;
        let formElements = Array.from(form.elements);
        formElements.filter(element => element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA' || element.nodeName === 'SELECT')
            .forEach(field => {
                if (!field.checkValidity()) {
                    isValid = false;
                }
            });

        if(!isValid){
            formElements.forEach(element => {
                validateField(element);
            });
        }

        return isValid;
    }
}

hideAllErrors = function(fieldName) {
    Object.values(errValidityMap).forEach(errorType => {
        let error = document.getElementsByClassName(`${fieldName}${errorType}`)[0];
        if(error) {
            error.style.display = 'none';
        }
    });
};

validateField = function(field){ 
    hideAllErrors(field.name);
    Object.keys(errValidityMap).find(key => {
        let error = document.getElementsByClassName(`${field.name}${errValidityMap[key]}`)[0];
        if(field.validity[key] && error) {
            error.style.display = 'initial';
            return true;
        }
        return false;
    });
}