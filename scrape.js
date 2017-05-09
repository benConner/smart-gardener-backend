var request = require('request');
var cheerio = require('cheerio');

let veg = [
  "artichokes",
  "asparagus",
  "green-beans"
  // "lima-bean",
  // "pole-beans",
  // "bean-sprouts",
  // "beets",
  // "broccoli",
  // "brussels-sprouts",
  // "butternut-squash",
  // "cabbage",
  // "cantaloupe",
  // "carrots",
  // "cauliflower",
  // "celery",
  // "corn",
  // "cucumbers",
  // "eggplant",
  // "garlic",
  // "hops",
  // "horseradish",
  // "kale-plant",
  // "leeks",
  // "lettuce",
  // "okra",
  // "onions",
  // "parsnip",
  // "peanuts",
  // "peas",
  // "bell-peppers",
  // "hot-peppers",
  // "potatoes",
  // "pumpkins",
  // "giant pumpkins",
  // "radishes",
  // "rhubarb",
  // "shallots",
  // "soybeans",
  // "spinach",
  // "summer-squash",
  // "winter-squash",
  // "strawberry-plants",
  // "sweet-corn",
  // "sweet-potatoes",
  // "swiss-chard",
  // "tomato-plants",
  // "turnips",
  // "watermelon",
  // "zucchini"
]

for (let i = 0; i < veg.length; i++) {
  request(`http://www.growinganything.com/growing-${veg[i]}.html`,(error, response, html) => {
    if (!error && response.statusCode == 200) {
      let $ = cheerio.load(html);
      $('#ContentColumn .Liner').each(function(){
        let  a = $(this);

        let name = a.children('h1')
        // let img = a.attr('src')
        let description = a.children('p')
        let sun_amount = a.hasClass('snapshot').children('ul li:nth-child(5)')
        // let weather_tolerance =
        // let soil_germ_temp =
        // let life_cycle =
        // let planting_depth =
        // let days_to_germ =
        // let soil_ph =
        // let growing_soil_temp =
        // let time_to_harvest =
        // let seed_longevity =
        // let pest =
        // let diseases =

        // let plantData = {
        //   name: name,
        //   img: img,
        //   description: description,
        //   sun_amount: sun_amount,
        //   weather_tolerance: weather_tolerance,
        //   soil_germ_temp: soil_germ_temp,
        //   life_cycle: life_cycle,
        //   planting_depth: planting_depth,
        //   days_to_germ: days_to_germ,
        //   soil_ph: soil_ph,
        //   growing_soil_temp: growing_soil_temp,
        //   time_to_harvest: time_to_harvest,
        //   seed_longevity: seed_longevity,
        //   pest: pest,
        //   diseases: diseases
        // };
        // console.log(a.text());
        // console.log(name.text());
        // console.log(description.text());
        console.log(sun_amount.text());

      });
    }
  });
}
