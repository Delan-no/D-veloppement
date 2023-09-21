let app = new Vue({
    el:'#app',
    data: {

        yo: "je suis Délanno",
        age: 21,
        informatique : "Développeur back-end",

        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString(),

        obj:{
            nom:"Martin",
            taille:3
        },
        notes: [
            20, 13, 40
        ]

        
    }
})