exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('plants').insert({
          name: 'tomato',
          img: 'URL',
          description: "Growing asparagus.",
          sun_amount: "a lot",
          weather_tolerance: "cold weather",
          soil_germ_temp: "around 30",
          life_cycle: "every year",
          planting_depth:"1-2 inches",
          row_spacing: "3 feet",
          days_to_germ: "3.5 days",
          soil_ph: "7 ph balance",
          growing_soil_temp: "around 45",
          time_to_harvest: "3 weeks",
          seed_longevity: "2 days",
          pest: ['moth', "bug", "more bugs"],
          diseases: ["growing old", "diseases", "more diseases" ]
        }),
        knex('plants').insert({
          name: 'potatoes',
          img: 'URL',
          description: "Growing potatoes.",
          sun_amount: "a lot",
          weather_tolerance: "cold weather",
          soil_germ_temp: "around 30",
          life_cycle: "every year",
          planting_depth:"1-2 inches",
          row_spacing: "3 feet",
          days_to_germ: "3.5 days",
          soil_ph: "7 ph balance",
          growing_soil_temp: "around 45",
          time_to_harvest: "3 weeks",
          seed_longevity: "2 days",
          pest: ['moth', "bug", "more bugs"],
          diseases: ["growing old", "diseases", "more diseases" ]
        }),
        knex('plants').insert({
          name: 'hats',
          img: 'URL',
          description: "Growing asparagus.",
          sun_amount: "a lot",
          weather_tolerance: "cold weather",
          soil_germ_temp: "around 30",
          life_cycle: "every year",
          planting_depth:"1-2 inches",
          row_spacing: "3 feet",
          days_to_germ: "3.5 days",
          soil_ph: "7 ph balance",
          growing_soil_temp: "around 45",
          time_to_harvest: "3 weeks",
          seed_longevity: "2 days",
          pest: ['moth', "bug", "more bugs"],
          diseases: ["growing old", "diseases", "more diseases" ]
        })
      ])
    })
}
