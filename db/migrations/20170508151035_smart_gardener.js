
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', function(table) {
    table.increments()
    table.string('name').notNullable().unique()
    table.text('img').notNullable()
    table.text('description').notNullable()
    table.string('sun_amount').notNullable()
    table.string('weather_tolerance').notNullable()
    table.string('soil_germ_temp').notNullable()
    table.string('life_cycle').notNullable()
    table.string('planting_depth').notNullable()
    table.string('row_spacing').notNullable()
    table.string('days_to_germ').notNullable()
    table.string('soil_ph').notNullable()
    table.string('growing_soil_temp').notNullable()
    table.string('time_to_harvest').notNullable()
    table.string('seed_longevity').notNullable()
    table.specificType('pest', knex.raw('text[]')).notNullable().defaultTo('{"none"}');
    table.specificType('diseases', knex.raw('text[]')).notNullable().defaultTo('{"none"}');
  })
  .createTable('gardens', function(table) {
    table.increments()
    table.string('name').notNullable().unique()
    table.integer('height').notNullable()
    table.integer('length').notNullable()
  })
  .createTable('plants_gardens', (table) => {
    table.increments()
    table.integer('plant_id').unsigned().references('plants.id')
    table.integer('garden_id').unsigned().references('gardens.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
 .dropTable('plants_gardens')
 .dropTable('gardens')
 .dropTable('plants')
};
