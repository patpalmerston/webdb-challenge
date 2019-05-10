const db = require('../dbConfig');

module.exports ={
  find,
  findById,
  add,
  // update,
  // remove
}

function find() {
  return db('projects')
  .first()
}

async function findById(id) {
  const project = await db("projects")
    // .select("*")
    .where({ 'projects.id': Number(id) })
    .first()

  const actions = await db("actions")
  .join( "projects", "projects.id", "=", "actions.project_id" )
  .select( "actions.project_id", "actions.description", "actions.notes" )
  .where({ "actions.project_id": Number(id) })
    return {...project, actions: [...actions]};
}

// const add = function (project) {
//   return db('projects')
//       .insert(project)
//       .then(([id]) => this.get(id));
// }

function add(project) {
  return db('projects')
    .insert(project, "id")
    .then(([id]) => {
      return findById(id);
    })
}

