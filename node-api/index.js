const express = require('express');
const cors = require('cors');

const app = express();

app.listen(5500, () => console.log('* Rodando na porta 5500'));

app.use(cors());

app.use(express.json());

let users = [{
  id: 1,
  name: 'gustavo^~',
  user: 'drypzz',
  avatar: 'https://avatars.githubusercontent.com/u/79218936?v=4',
  city: 'Brazil',
  github: 'https://github.com/drypzz'
}];


app.route('/api').get((req, res) => res.json({
  users
}));

app.route('/api/id=:id').get((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User não encontrado')
  }

  res.json(user)
});

app.route('/api').post((req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city,
    github: req.body.github
  })
  res.json('User salvo')
});

app.route('/api/id=:id').put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User não encontrado')
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city,
    github: req.body.github
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json('User atualizado')
})

app.route('/api/id=:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('User deletado')
});