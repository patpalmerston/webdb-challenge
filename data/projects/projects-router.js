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

router.get('/:id', (req, res) => {
  const project = req.params.id;
  db
    .findById(project)
    .then(proj => {
      if (proj) {
        res.status(200).json(proj)
      } else {
        res.status(404).json({ message: 'Project not found'})
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Project info unavailable", err })
    })
});

router.post('/', async (req, res) => {
  const project = req.body;

  if (project.name) {
    try {
      const inserted = await db.add(track);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the project' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the project' });
  }
});


module.exports = router;
// '/actions/:projectId'