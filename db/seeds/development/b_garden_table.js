
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gardens').del()
    .then(function () {
      // Inserts seed entries
      return knex('gardens').insert([
        {name:"the best garden"},
        {name:"bill"},
        {name: "spring17"}
      ]);
    });
};
