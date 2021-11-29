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

        addContact() {

            // TODO Comprobar validez de los campos (regex)

            const newContact = {name: this.name, email: this.email, phoneNumber: this.phoneNumber};
            this.contacts.push(newContact);

            // Reseteo
            this.name = "";
            this.email = "";
            this.phoneNumber = ""; 
        }
    }
})