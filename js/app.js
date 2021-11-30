var app = new Vue({

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

    methods: {

        validateContact() {
            // TODO Comprobar validez de los campos (regex)
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const phoneRegex = /^\d{10}$/;

            // Autenticación
            if (emailRegex.test(this.email)) {}
            if (this.name === "") {}
            if (phoneRegex.test(this.phoneNumber)) {}

            return true;
        },

        addContact() {
            // Comprobaciones
            if (this.validateContact()) {

                const newContact = {name: this.name, email: this.email, phoneNumber: this.phoneNumber};
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
})