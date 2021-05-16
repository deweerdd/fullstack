const express = require('express');
const cors = require('cors');

var morgan = require('morgan');

morgan.token('body', function (req) { return JSON.stringify(req.body) })

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :response-time ms :body'));


const PORT = process.env.PORT || 3001;

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
app.get('/', (request, response, next) => {
    response.send('<h1>Phonebook Backend</h1>');
    next();
})

app.get('/info', (request, response, next) => {
    const personsLength = persons.length;
    const date = new Date();
    response.send(`
    <h1>Information:</h1>
    <div>Phonebook has info for ${personsLength} people</div>
    <br />
    <div>${date}</div>`);
    next();
})

app.get('/api/persons', (request, response, next) => {
    response.send(persons);
    next();
})

function getRandomId(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

app.get('/api/persons/:id', (request, response, next) => {
    const id = Number(request.params.id);
    if (!idExists(id)) {
        return response.status(404).send(`ID: ${id} not found in database`);
    }
    response.send(persons.find(p => p.id === id));
    next();
})

app.post('/api/persons', (request, response, next) => {
    let body = request.body;
    let person = {
        id: getRandomId(1, 1000),
        name: body.name,
        number: body.number
    }
    console.log(body.name)

    if (person.name === "") {
        response.status(404).statusMessage(`Error: name is ${person.name}`);
    }

    if (person.number === "") {
        response.status(404).statusMessage(`Error: number is ${person.number}`);
    }

    if (persons.find(p => p.name === person.name)) {
        return response.status(500).statusMessage(`Error: ${person.name} already exists`);
    }
    response.status(200).send(persons.concat(person));
    next();
})

app.delete('/api/persons/:id', (request, response, next) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id);
    console.log(persons)
    response.status(200).send(persons);
    next();
})

app.listen(PORT, () => {
    console.log(`Backend Started on ${PORT}`)
})