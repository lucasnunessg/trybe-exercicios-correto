const validateDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json({ message: `o campo ${value} é obrigatório` });
  }
};

module.exports = (res, req, next) => {
  const { description } = req.body;

  return validateDescription(description, res, 'description')

    || validateDescription(description.createdAt, res, 'createdAt')

    || validateDescription(description.rating, res, 'rating')

    || validateDescription(description.difficulty, res, 'difficulty')

    || next();
};

  // if (!description) {
  //   return res.status(400).json({ message: 'O campo description é obrigatório!' });
  // }
  // if (!description.createAte) {
  //   return res.status(400).json({ message: 'O campo createAt é obrigatório!' });
  // }
  // if (!description.rating) {
  //   return res.status(400).json({ message: 'O campo rating é obrigatório!' }); 
  // }
  // if (!description.difficulty) {
  //   return res.status(400).json({ message: 'O campo difficulty é obrigatório!' });
  // }
  // next();