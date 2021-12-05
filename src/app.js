// Vue
import Vue from 'vue';

// Validations
import Vuelidate from 'vuelidate';
import { required, email, helpers } from 'vuelidate/lib/validators'

// Database
import { rtdbPlugin } from 'vuefire';
import { db } from'./db';

// Add vue plugins
Vue.use(Vuelidate);
Vue.use(rtdbPlugin);

const phoneNumberRegex = helpers.regex('phoneNumberRegex', /^\d{9}$/);

// Create main Vue instance
new Vue({

    el: '#app',
    data: {

        name: '',
        email: '',
        phoneNumber: '',

        contacts: []
    },

    firebase: {

        contacts: db.ref('contacts')
    },

    validations: {
        name: {
            required,
        },
        email: {
            required,
            email,
        },
        phoneNumber: {
            required,
            phoneNumberRegex,
        }
    },

    methods: {

        addContact() {

            this.$v.$touch();

            if (!this.$v.$invalid) {

                const newContact = { name: this.name, email: this.email, phoneNumber: this.phoneNumber };
                db.ref('contacts').push(newContact);

                // Reseteo
                this.name = '';
                this.email = '';
                this.phoneNumber = '';

                this.$v.$reset();
            }
        },

        removeContact(id) {
           db.ref('contacts/' + id).remove();
        }

    }
});