const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
    { id:1, name:'saba', email:'saba@gmail.com'},
    { id:2, name:'sabaNoor', email:'sabanoor@gmail.com'},
    { id:3, name:'sabila', email:'sabila@gmail.com'}
]

app.get('/', (req, res) => {
    res.send('User Management server is running')
})

app.get('/users', (req, res) =>{
    res.send(users);
})

app.post('/user', (req, res) => {
    console.log('post API hitting')
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})