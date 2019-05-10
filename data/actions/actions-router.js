const router = require('express').Router();

const db = require('./actionsModel');




router.get('/', async (req, res) => {
  try{
    const actions = await db.find();
    res.status(200).json(actions)
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Not able to retrieve action '})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const action = await db.findById(req.params.id);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: 'We could not find the action' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the action' });
  }
});


module.exports = router;