const router = require('express').Router();

const db = require('./projectModel');

router.get('/', async (req, res) => {
  try{
    const projects = await db.find();
    res.status(200).json(projects)
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Not able to retrieve Project '})
  }
});

module.exports = router;