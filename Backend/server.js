import express from 'express';

const app = express();

// app.get('/', (res, req) => {
//     res.send("server is ready.")
// });

// Get a list of 5 jokes 

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id : 1,
            title : 'A Joke',
            content: 'This is a Joke'
        },
        {
            id : 2,
            title : 'Another Joke',
            content: 'This is Second Joke'
        },
        {
            id : 3,
            title : 'Another Joke',
            content: 'This is Third Joke'
        },
        {
            id : 4,
            title : 'Another Joke',
            content: 'This is Fourth Joke'
        },
        {
            id : 5,
            title : 'Another Joke',
            content: 'This is Fifth Joke'
        },
        
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log( `server servers at http://localhost:${port}`)
});

