import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators'
import { helpers } from 'vuelidate/lib/validators'

Vue.use(Vuelidate);

const phoneNumberRegex = helpers.regex('phoneNumberRegex', /^\d{9}$/)

new Vue({

    el: '#app',
    data: {

        name: "",
        email: "",
        phoneNumber: "",

        contacts: [

            { name: 'Roberto', email: 'rbt@gmail.com', phoneNumber: '12676' },
            { name: 'Iker', email: 'ikk@gmail.com', phoneNumber: '21365' },
            { name: 'Julen', email: 'julen@gmail.com', phoneNumber: '999213' }

        ]

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

            if (!this.$v.$invalid) {
                const newContact = { name: this.name, email: this.email, phoneNumber: this.phoneNumber };
                this.contacts.push(newContact);

                // Reseteo
                this.name = "";
                this.email = "";
                this.phoneNumber = "";
            }
        },

        removeContact(index) {
            this.contacts.splice(index, 1);
        }

    }
});