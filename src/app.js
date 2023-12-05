// app.js
const express = require('express');
const auth = require('./middleware/auth');
const generateToken = require('./utils/generateToken');
const validateDifficulty = require('./middleware/validateDifficulty');
const validateRating = require('./middleware/validateRating');
const validateCreatedAt = require('./middleware/validateCreateAt');
const validateDescription = require('./middleware/validateDescription');
const validatePrice = require('./middleware/validatePrice');
const validateName = require('./middleware/validateName'); 

const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

app.post('/activities', 
auth,
validateDifficulty,
validateRating, 
validateCreatedAt, 
validateDescription, 
validatePrice, 
validateName, (_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

module.exports = app;