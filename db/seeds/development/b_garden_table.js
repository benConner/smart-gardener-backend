
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gardens').del()
    .then(function () {
      // Inserts seed entries
      return knex('gardens').insert([
        {
          name:"The Best Garden",
          height: 3,
          length: 4
        },
        {
          name:"My garden17",
          height: 7,
          length: 4
        },
        {
          name: "Spring17",
          height: 3,
          length: 8
        }
      ]);
    });
};
