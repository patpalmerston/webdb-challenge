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


// router.post('/', (req, res) => {
//   const { name, description } = req.body;
//   const newProject = { name, description }
//   if (!name || !description) {
//     return  res.status(404).json({ message: 'name and description please'});
//   }
//   const findProject = project => {
//     return project.name === name;
//   };
//   if (db.add(findProject)) {
//     return  res.status(500).json({ message: 'already exists'});
//   }

//   db.push(newProject);
  
//   res.json(db);
// });

const addProject = (req, res) => {
  if (req.body.name === undefined || req.body.description === undefined) {
      res.status(400).json({ message: "name and notes for the action are required." });
      return;
  }

  db.add(req.body)
      .then(data => {
          res.status(200).json(data);
      })
      .catch(err => {
          res.status(500).json({ message: "Failed to save Project", error: err });
      });
}

router.post('/', addProject);


module.exports = router;


// router.post('/', (req, res) => {
//   const project = req.body;
//   if (!project || !project.name || !project.description) {
//     return  res.status(400).json({ message: 'add name and desc'});
//   } else {
//     db
//       .add(project)
//       .then(project => {
//         res.status(200).json(project);
//       })
//       .catch(err => {
//         res.status(500).json({
//           error: "There was an error while saving the project to the database"
//         });
//       });
//   }
// });

//dustin
// server.post('/smurfs', (req, res) => {
//   const { name, age, height } = req.body;
//   const newSmurf = { name, age, height, id: smurfId };
//   if (!name || !age || !height) {
//     return sendUserError(
//       'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
//       res
//     );
//   }
//   const findSmurfByName = smurf => {
//     return smurf.name === name;
//   };
//   if (smurfs.find(findSmurfByName)) {
//     return sendUserError(
//       `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
//       res
//     );
//   }

//   smurfs.push(newSmurf);
//   smurfId++;
//   res.json(smurfs);
// });