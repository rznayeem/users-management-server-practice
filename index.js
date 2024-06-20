const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: '1', name: 'name', email: 'mail@gmail.com' },
  { id: '2', name: 'name2', email: 'mail2@gmail.com' },
  { id: '3', name: 'name3', email: 'mail3@gmail.com' },
];

app.get('/', (req, res) => {
  res.send('users management server is running');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) => {
  console.log('post api hit');
  console.log(req.body);
  const newUSer = req.body;
  users.push(newUSer);
  res.send(newUSer);
});

app.listen(port, () => {
  console.log(`Server is running in PORT:${port}`);
});
