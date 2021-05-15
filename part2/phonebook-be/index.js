const express = require('express');
const app = express();
const port = 3001;

const persons =
    [
        {
            id: 1,
            name: "Arto Hellas",
            number: "040-123456"
        },
        {
            id: 2,
            name: "Ada Lovelace",
            number: "39-44-5323523"
        },
        {
            id: 3,
            name: "Dan Abramnov",
            number: "12-43-2344345"
        },
        {
            id: 4,
            name: "Mary Poppendick",
            number: "39-23-6423122"
        },
    ]
app.get('/', (request, response) => {
    response.send('<h1>Phonebook Backend</h1>');
})

app.get('/info', (request, response) => {
    const personsLength = persons.length;
    const date = new Date();
    response.send(`
    <h1>Information:</h1>
    <div>Phonebook has info for ${personsLength} people</div>
    <br />
    <div>${date}</div>`);
})

app.get('/api/persons', (request, response) => {
    response.send(persons);
})

app.listen(port, () => {
    console.log(`Backend Started on ${port}`)
})