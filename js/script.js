// ESERCIZIO:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
const {createApp} = Vue;
createApp ({
    data () {
        return {
            pageTitle: "Benvenuto al nuovo Calvario, pronto ad affrontarlo con VUE?",
            pageSubTitle: "speriamo bene, perchè Vue dovrebbe aiutarti tanto",
            imgSrc: "https://i2.wp.com/nationaleconomicseditorial.com/wp-content/uploads/41bf0c3e58099d42176b2d327e6740a2.jpg?fit=721%2C518&ssl=1"
        };
    },
}).mount("#app");