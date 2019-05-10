const db = require('../dbConfig');

module.exports ={
  find,
  // findById,
  // add,
  // update,
  // remove
}

function find() {
  return db('projects')
}