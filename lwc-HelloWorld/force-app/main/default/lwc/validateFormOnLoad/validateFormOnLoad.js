import { LightningElement, track } from 'lwc';

export default class ValidateFormOnLoad extends LightningElement {
    @track isFormValid = false;

    connectedCallback() {
        debugger;
        // super.connectedCallback();
        this.validateForm();
    }

    handleInputChange() {
        this.validateForm();
    }

    validateForm() {
        const inputElement = this.template.querySelector('input[type="text"]');
        
        if (inputElement && inputElement.checkValidity()) {
            this.isFormValid = true;
        } else {
            this.isFormValid = false;
        }

        this.dispatchEvent(new CustomEvent('formvalidation', { detail: this.isFormValid }));
    }
}
