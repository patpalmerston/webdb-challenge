exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Complete The Sprint Challenge of Friday 5/10/2019',
      description:
        'Create Server, Router and Data from scratch',
    },
  ]);
};
