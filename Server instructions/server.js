import express from 'express';

const app = express();

let currentUser = {
  id: '1',
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['reading', 'hiking', 'coding'],
}

let users = [{
  id: '1',
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['reading', 'hiking', 'coding'],
},
{
  id: '2',
  name: 'Alice Johnson',
  age: 25,
  hairColor: 'black',
  hobbies: ['gaming', 'cooking']
}, {
  id: '3',
  name: 'Bob Brown',
  age: 40,
  hairColor: 'red',
  hobbies: ['fishing', 'hunting']
}];

let products = [{
  id: '1',
  name: 'Laptop',
  price: 999.99,
  description: 'High performance laptop for professionals',
  rating: 4.5,
}, {
  id: '2',
  name: 'Smartphone',
  price: 499.99,
  description: 'Latest model smartphone with advanced features',
  rating: 4.0
}, {
  id: '3',
  name: 'Coffee Maker',
  price: 79.99,
  description: 'Brews coffee quickly and efficiently',
  rating: 4.2
}];

app.get('/api/current-user', (req, res) => {
  res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params
console.log('Fetching user with ID:', id);
  res.json(users.find(user => user.id === id));
});

app.post('/users/:id', (req, res) => {
  const { id } = req.params;

  const {user: updateUser} = req.body;

  users = users.map(user => user.id === id ? updateUser : user);
  res.json(users.find(user => user.id === id));
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json(products.find(product => product.id === id));
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});