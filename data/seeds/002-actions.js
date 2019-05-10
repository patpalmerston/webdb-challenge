exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'Do Something Fancy',
      notes:
        'When I do fancy things its awesome',
    },
    {
      project_id: 1,
      description: 'Maybe do something fun',
      notes: 'Fun things make me happy in the heart place',
    },
    {
      project_id: 1,
      description: 'When I"m finished I"ll cuddle with the baby',
      notes: 'Unicorns and lollypops make for summer fun',
    },
  ]);
};
