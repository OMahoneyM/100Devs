const express = require('express');
const morgan = require('morgan');
const app = express()


let notes = [  
    {    
        id: "1",    
        content: "HTML is easy",    
        important: true  
    },  
    {    
        id: "2",    
        content: "Browser can execute only JavaScript",    
        important: false  
    },  
    {    
        id: "3",    
        content: "GET and POST are the most important methods of HTTP protocol",    
        important: true  
    }
]

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.use(express.json())

morgan.token('data', req => JSON.stringify(req.body));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :res[content-length] :data'))

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

const generateId = () => {
    const maxId = notes.length > 0 
        ? Math.max(...notes.map(el => Number(el.id))) 
        : 0;
    return String(maxId + 1);
}

const generateRandomId = () => {
    return Math.round(Math.random() * 10000)
}


//Notes API
app.post('/api/notes', (req, res) => {
    const body = req.body

    if (!body.content) {
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: Boolean(body.important) || false,
        id: generateId()
    }

    notes = notes.concat(note)

    console.log(note)

    res.json(note)
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find(note => note.id === id);
    note ? res.json(note) : res.status(404).end()
})

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    notes = notes.filter(note => note.id !== id);

    res.status(204).end()
})

//Person API
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = persons.find(person => person.id === id);
    person ? res.json(person) : res.status(404).end();
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    persons = persons.filter(person => person.id !== id);

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const body = req.body;

    if (!body.name) {
        return res.status(400).json({ error: 'name missing' })
    } else if (!body.number) {
        return res.status(400).json({ error: 'number missing' })
    }

    if (persons.some(el => el.name === body.name)) {
        return res.status(400).json({ error: 'name must be unique' })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateRandomId()
    }

    // morgan.token('person', res.json(person))

    // morgan(':method :url :status :res[content-length] - :response-time ms :person')

    persons = persons.concat(person)

    res.json(person)
})


//Info page
app.get('/info', (req, res) => {
    let people = persons.length;
    let date = new Date(Date.now())

    res.send(`<p>Phonebook has info for ${people} people</p><p>${date}</p>`)
})
  
app.use(unknownEndpoint)

const PORT = 3001;
app.listen(PORT)
console.log(`Server running on port ${PORT}`)