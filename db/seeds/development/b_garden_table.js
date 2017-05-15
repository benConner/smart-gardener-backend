
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gardens').del()
    .then(function () {
      // Inserts seed entries
      return knex('gardens').insert([
        {
          name:"the best garden",
          height: 3,
          length: 4
        },
        {
          name:"bill",
          height: 7,
          length: 4
        },
        {
          name: "spring17",
          height: 3,
          length: 8
        }
      ]);
    });
};
