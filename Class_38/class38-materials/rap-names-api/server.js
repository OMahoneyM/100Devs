const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const rappers = {
    '21 savage':{
        'age': 31,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'borthLocation': 'London, England'
    },
    'killer mike':{
        'age': 49,
        'birthName': 'Michael Santiago Render',
        'borthLocation': 'Atlanta, Georgia'
    },
    'dylan':{
        'age': 44,
        'birthName': 'Dylan Dilinjah ',
        'borthLocation': 'Brooklyn, New York'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase();
    if(rappers[rappersName]) {
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})
