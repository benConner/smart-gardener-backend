
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants_gardens').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
       knex('plants_gardens').insert({
         plant_id: 1,
         garden_id: 1
       }),
       knex('plants_gardens').insert({
         plant_id: 2,
         garden_id: 2
       }),
       knex('plants_gardens').insert({
         plant_id: 3,
         garden_id: 3
       }),
       knex('plants_gardens').insert({
         plant_id: 1,
         garden_id: 2
       }),
       knex('plants_gardens').insert({
         plant_id: 3,
         garden_id: 2
       }),
       knex('plants_gardens').insert({
         plant_id: 1,
         garden_id: 2
       })
     ]);
    });
};
