// ESERCIZIO:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
const {createApp} = Vue;
createApp ({
    data () {
        return {
            pageTitle: "Benvenuto al nuovo Calvario, pronto ad affrontarlo con VUE?",
            pageSubTitle: "speriamo bene, perchè Vue dovrebbe aiutarti tanto"
        };
    },
}).mount("#app");