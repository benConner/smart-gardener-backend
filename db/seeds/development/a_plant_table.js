exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('plants').insert({
          "name": "Artichokes",
          "img": "http://www.growinganything.com/image-files/growing-artichokes.jpg",
          "description": "Growing artichokes can be tricky, especially if you live in a cooler climate.  They require warm soil, lots of light and well-drained soil. If you’re really feeling adventurous or are an expert home gardener, growing them from scratch is doable and rewarding. If not, picking up an organically raised artichoke plant from your local nursery and transplanting it in your garden is the easier way to go.Artichokes originated in the Mediterranean region, leading them to flourish in warm and sunny weather with warm soil.  In contrast, they tend to have a tough time in freezing temperatures and will most likely not survive a hard frost.They are not fans of overly moist soil, and their size along with the girth of their buds require plenty of nutrients.  Make sure their beds have adequate drainage, and keep them happy with a generous supply of rotted manure or compost.All of this adds up to sowing your seeds indoors where you can closely control the water, heat and soil of this finicky plant until you’re sure the frost has passed. Plant them about 6 weeks before the last frost, as that is about the time you’ll want to transplant.As soon as the frost is gone, transplant your artichoke plant to your garden, leaving just over 2 feet (63.5 cm) in between each seed.As mentioned above, artichokes are hungry plants that demand continuous watering (although no over-watering) and plenty of nutrients.  As with the planting phase, the soil that receives your transplanted young artichoke plants needs well-fertilized soil.In addition to the compost- or rotted-manure-rich soil, feed them a liquid organic garden fertilizer such as aerated compost tea or fish emulsion.Artichokes are perennials, so you won’t be able to harvest until the 2nd year.For maximum deliciousness, you’ll want to harvest your artichokes just before they begin to open… you’ll know they’re ready when the top bud (also called the “terminal” bud) has a consistent green color throughout.  To remove them, cut them off at the base.The lower or “secondary” buds will be ready to harvest shortly thereafter – no more than a few days.Your freshly picked buds will keep for about two weeks in the refrigerator. For up to 6 month storage, you’ll need to blanch the artichoke before freezing in order for it to maintain its flavor.  Before doing so, remove the stem and all outer leaves including the choke (the immature leaves in the middle) and scoop out the hair-like portion on top of the heart. Next, pour lemon juice on what remains in order to preserve its color.To blanch, add lemon juice to boiling water, then reduce heat to just below boiling.  Soak fully submerged artichokes for 20 minutes, then place in cool water for about the same amount of time.Drain the artichokes thoroughly, place them in a freezer bag and freeze.",
          "sun_amount": "Full sun (at least 6 hours each day) When planning vegetable crop rotation, group with crops from this family: n/a (perennial) Companion plants",
          "weather_tolerance": "Warm Season – Will not survive frost and their seeds will not germinate in cold soil. Plant them at about the average date of the last 32 degree F (0 degree C) temperature in spring",
          "soil_germ_temp": "70 to 80 degrees F (21 to 27 degrees C)",
          "life_cycle": "Perennial",
          "planting_depth": "¼ inch (6 mm)",
          "row_spacing": "25 inches (63.5 cm)",
          "days_to_germ": "7 to 14 days",
          "soil_ph": "6.5 to 7.5",
          "growing_soil_temp": "60 to 75 degrees F (16 to 24 degrees C)",
          "time_to_harvest": "18 months",
          "seed_longevity": "5 years",
          "pest": [
            "artichoke plume moth",
            "aphids",
            "cutworms",
            "painted lady butterfly larva",
            "snails",
            "slugs"
          ],
          "diseases":[
            "damping off",
            "gray mold",
            "powdery mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Asparagus",
          "img": "http://www.growinganything.com/image-files/growing-asparagus.jpg",
          "description": "Growing asparagus has been a wonderful spring pastime since it was first grown in Macedonia around 200 BC, making it one of the first vegetables cultivated by humans. Asparagus is a vegetable that is elegant and simple at the same time, and is rather expensive to buy in a store. This is not an easy vegetable to grow for the inexperienced gardener, yet learning how to grow asparagus can supply you with these tempting and tender stalks of goodness for many years to come. Full sun and acidic, well-drained soil are necessary for its success.Asparagus is a perennial plant that takes at least one year to reach harvest time. But once it starts producing, it'll keep on going for as long as 15 years or more. This means that you must carefully prepare the soil to encourage maximum healthy growth and carefully choose its garden spot.Garden weeds are often an issue with asparagus plants, so many choose to plant (or transplant) them in the middle of their garden rather than on the outskirts in order to keep them as far away as possible from potential intruders. This plant likes a sandy, well-drained soil and full sun. Asparagus is extremely hard to grow from seed, though it is possible for a dedicated gardener to succeed. Most gardeners choose to purchase year-old asparagus crowns from a nursery or garden center (although starting them from seed is much cheaper). This saves a year of time, and allows you to harvest asparagus more quickly. Male plants are preferred, as they are more prolific and do not waste growth time on making seeds.If you decide to sow the seeds yourself, start them indoors a few months before the last frost. Keep the temperature between 75 and 85 degrees F (24 to 29.4 C) during the day, and don't turn down the thermostat below 65 degrees F (18 C) at night. These hardy plants only need an average amount of organic garen fertilizer, so there's no need to over-do it.Asparagus crowns take one to two years to become mature enough to harvest. During this time, you must carefully watch over the plants.Plant in full sun, making a furrow of soil, but do not fill the furrow completely. You will be covering them with more soil when they reach a height of about 3 inches. When the plants go dormant, most gardeners add a little more soil to the furrow to fill it in completely. Asparagus does not need a lot of water unless its environment is arid or a drought is present. When it’s time to harvest asparagus, your bed will have been in place for 2-3 years. Do not harvest asparagus the first year, as this will harm the future production of the plant.When the stalks are a height of 6 to 12 inches and their diameters are over 3/8 of an inch (1 cm), you can either snap them off at the base or cut them. You will want to leave the thinner stalks intact, as they will grow into ferns that will feed future years' crops in two ways: directly via the normal life cycle of the plant and indirectly after you harvest the dried up ferns later in the year and add them to the compost pile.Since your asparagus plants will produce for up to 15 years, apply a generous layer of compost after harvest then protect the plant with a layer of straw about 6 inches (15 cm) deep. Fresh asparagus may be stored in the refrigerator in plastic bags for about a week.To prepare asparagus for freezing, wash and trim the stalks, taking off the scales with a knife. Trim the length to fit into the freezer bags or containers you plan to use.Blanch asparagus 2 to 4 minutes depending on size, the cool, drain, place into container or bag, and freeze.",
          "sun_amount": "Full sun (at least 6 hours each day)",
          "weather_tolerance": "Hardy- will survive hard frosts and can be planted 2 to 3 weeks before the average date of the last 32 degree F temperature in the spring",
          "soil_germ_temp": "75 to 85 degrees F (24 to 29.4 degrees C)",
          "life_cycle": "Perennial",
          "planting_depth": "4-6 inches for crows, 1 inch for seed",
          "row_spacing": "15-18inches (38-45 cm)",
          "days_to_germ": "10-15 days",
          "soil_ph": "6.0-6.5",
          "growing_soil_temp": "50 to 70 degrees F (10 to 21 degrees C)",
          "time_to_harvest": "2 years for crowns, 3 years for seed",
          "seed_longevity": "3 years",
          "pest": [
            "asparagus beetle",
            "cutworm",
            "aphid",
            "snails/slugs",
            "Spider Mites",
            "thrips",
            "Wireworm"
          ],
          "diseases": [
            "rust",
            "Phytophrthora crown and spear rot",
            "Fusarium Wilt"
          ]
        }),
        knex('plants').insert({
          "name": "Green Beans",
          "img": "http://www.growinganything.com/image-files/growing-green-beans.jpg",
          "description": "Growing green beans is a fun and fairly simple gardening project – and green beans are a vegetable that even the kids love! There are many different types available, and most  can be found in the form of a bush bean (grows as a bush) and a pole bean (grows up a support). Other than the support, pole and bush beans have the same growing requirements. Since pole beans are easier to pick and yield many more pods per plant, we tend to lean in that direction.Green beans are easy to grow from seed, but they must be planted with the eye of the seed facing down after all danger of frost has passed. Make sure the soil is continually moist until the plant germinates and that the bed has good drainage. Because some varieties can take a long time to mature, it's best to plant them as soon as the soil warms sufficiently. Some varieties are more tolerant of very hot weather than others, so those in warmer climates should choose their variety carefully. Upon planting, fertilize with a liquid organic garden fertilizer. Green beans require soil that is not too heavy, so if you have clay soil, you'll need to amend yours with some sand or vermiculite to lighten it up. Water the plants as closely to the ground as possible (a drip system works the best) as getting the leaves wet can lead to disease.  As long as you have relatively fertile soil, additional fertilizing should not be necessary.Larger beans tend to be tough and stringy, so harvest your green beans when they’re 5 to 7 inches (13 to 18 cm) long and about the diameter of a pencil. You'll need to harvest every 2 to 3 days.Be certain not to leave beans on the vine, or production will stop. Most green beans are high producers, so it’s not unusual to end up with far more than you can use. If this is the case, allow the pods to mature into shell beans for a treat of a different sort. Green beans can be stored in the warmest part of the refrigerator for about a week. Use perforated bags for best results - they freeze beautifully. Prepare them for cooking by washing and snapping off the ends. Then blanch them for 3 minutes in boiling water before freezing. They can also be canned.",
          "sun_amount": "Full sun (at least 6 hours each day) When planning vegetable crop rotation, group with crops from this family: n/a (perennial) Companion plants",
          "weather_tolerance": "Warm Season – Will not survive frost and their seeds will not germinate in cold soil. Plant them at about the average date of the last 32 degree F (0 degree C) temperature in spring",
          "soil_germ_temp": "70 to 85 degrees F (21 to 29 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1 inch, 3 cm",
          "row_spacing": "for bush beans about 4 inches between plants",
          "days_to_germ": "7 to 14 days",
          "soil_ph": "6.0 to 7.5",
          "growing_soil_temp": "60 to 75 degrees F (16 to 24 degrees C)",
          "time_to_harvest": "45 to 85 days",
          "seed_longevity": "3 years",
          "pest": [
            "aphid",
            "cutworms",
            "darkling beetles", "earwigs", "grasshoppers", "loopers", "stink bugs", "common garden pests",
          ],
          "diseases": [
            "bean rust",
            "curly top",
            "white mold"
          ]
        })
      ])
    })
}
