const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

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

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})