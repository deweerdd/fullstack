const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.json())
const port = 3001;

let persons =
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

function getRandomId(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let idExists = (id) => {
    if (persons.find(p => p.id === id)) {
        return true
    } else {
        return false
    }
}

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    if (!idExists(id)) {
        return response.status(404).send(`ID: ${id} not found in database`);
    }
    response.send(persons.find(p => p.id === id));
})
app.post('/api/persons', (request, response) => {
    let body = request.body;
    console.log(body.name, body.number);

    if (body.name === undefined) {
        return response.status(404).send(`Error: name is ${body.name}`);
    }

    if (body.number === undefined) {
        return response.status(404).send(`Error: number is ${body.number}`);
    }

    if (persons.find(p => p.name === body.name)) {
        return response.status(500).send(`Error: ${body.name} already exists`);
    }

    let person = {
        id: getRandomId(1, 1000),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person);
    response.status(200).send(persons);
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    if (!idExists(id)) {
        return response.status(404).send(`ID: ${id} not found in database`);
    }
    persons = persons.filter(p => p.id !== id);
    response.status(204).send(persons);
})

app.listen(port, () => {
    console.log(`Backend Started on ${port}`)
})