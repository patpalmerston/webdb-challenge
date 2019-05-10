const db = require('../dbConfig');

module.exports ={
  find,
  findById,
  // getProjectActions,
  add,
  // update,
  // remove
}

function find() {
  return db('actions')
  .first()
}

function findById(id) {
  return db('actions')
    .where ({ id })
    .first()
}

function add(action) {
  return db('actions')
    .insert(action)
    .then(([id]) => this.get(id))
}