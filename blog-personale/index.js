// importo express
const express = require('express');

const app = express();

// definisco il numero di porta
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    let landingPgace = 'Server del mio blog'
    res.send(landingPgace)
});

app.get('/bacheca', (req, res) => {
    let post = [
        {
            title: 'Ciambellone',
            content: 'un dolce per tutte le occasioni',
            image: "<img src = 'http://localhost:3000./imgs/ciambellone.jpeg'>",
            tags: ['burro', 'zucchero', 'uova'],
        },
        {
            title: 'Cracker alla Barbabietola',
            content: 'Dei Cracker diversi dal solito',
            image: 'http://localhost:3000./imgs/cracker_barbabietola.jpeg',
            tags: ['barbabietola', 'semi', 'uova'],
        },
        {
            title: 'Pane Fritto',
            content: 'Quando non hai nulla in casa ma hai voglia di dolce',
            image: 'http://localhost:3000./imgs/pane_fritto_dolce.jpeg',
            tags: ['zucchero', 'pane', 'olio di semi'],
        },
        {
            title: 'Pasta alla Barbabietola',
            content: 'Quando vuoi stupire tutti con un piatto eccentrico',
            image: 'http://localhost:3000./imgs/pasta_barbabietola.jpeg',
            tags: ['pasta', 'barbabietole', 'condimento a piacere'],
        },
        {
            title: 'Torta Paesana',
            content: 'un dolce storico che mantiene le tradizioni',
            image: 'http://localhost:3000./imgs/torta_paesana.jpeg',
            tags: ['burro', 'zucchero', 'uova', 'cioccolato', 'semi'],
        },
    ];
    res.send(post)
});


app.listen(port, () => {
    console.log(port);
});