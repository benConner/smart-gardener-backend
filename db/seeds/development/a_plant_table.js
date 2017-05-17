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
          "description": "Growing artichokes can be tricky, especially if you live in a cooler climate.  They require warm soil, lots of light and well-drained soil. If you’re really feeling adventurous or are an expert home gardener, growing them from scratch is doable and rewarding. If not, picking up an organically raised artichoke plant from your local nursery and transplanting it in your garden is the easier way to go.Artichokes originated in the Mediterranean region, leading them to flourish in warm and sunny weather with warm soil.  In contrast, they tend to have a tough time in freezing temperatures and will most likely not survive a hard frost.They are not fans of overly moist soil, and their size along with the girth of their buds require plenty of nutrients.  Make sure their beds have adequate drainage, and keep them happy with a generous supply of rotted manure or compost.All of this adds up to sowing your seeds indoors where you can closely control the water, heat and soil of this finicky plant until you’re sure the frost has passed. Plant them about 6 weeks before the last frost, as that is about the time you’ll want to transplant.As soon as the frost is gone, transplant your artichoke plant to your garden, leaving just over 2 feet (63.5 cm) in between each seed.As mentioned above, artichokes are hungry plants that demand continuous watering (although no over-watering) and plenty of nutrients.  As with the planting phase, the soil that receives your transplanted young artichoke plants needs well-fertilized soil.In addition to the compost- or rotted-manure-rich soil, feed them a liquid organic garden fertilizer such as aerated compost tea or fish emulsion.Artichokes are perennials, so you won’t be able to harvest until the 2nd year.For maximum deliciousness, you’ll want to harvest your artichokes just before they begin to open… you’ll know they’re ready when the top bud (also called the “terminal” bud) has a consistent green color throughout.  To remove them, cut them off at the base.The lower or “secondary” buds will be ready to harvest shortly thereafter – no more than a few days.Your freshly picked buds will keep for about two weeks in the refrigerator. For up to 6 month storage, you’ll need to blanch the artichoke before freezing in order for it to maintain its flavor.  Before doing so, remove the stem and all outer leaves including the choke (the immature leaves in the middle) and scoop out the hair-like portion on top of the heart. Next, pour lemon juice on what remains in order to preserve its color.To blanch, add lemon juice to boiling water, then reduce heat to just below boiling.  Soak fully submerged artichokes for 20 minutes, then place in cool water for about the same amount of time.Drain the artichokes thoroughly, place them in a freezer bag and freeze",
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
          "description": "Growing green beans is a fun and fairly simple gardening project – and green beans are a vegetable that even the kids love! There are many different types available, and most can be found in the form of a bush bean (grows as a bush) and a pole bean (grows up a support). Other than the support, pole and bush beans have the same growing requirements. Since pole beans are easier to pick and yield many more pods per plant, we tend to lean in that direction.Green beans are easy to grow from seed, but they must be planted with the eye of the seed facing down after all danger of frost has passed. Make sure the soil is continually moist until the plant germinates and that the bed has good drainage. Because some varieties can take a long time to mature, it's best to plant them as soon as the soil warms sufficiently. Some varieties are more tolerant of very hot weather than others, so those in warmer climates should choose their variety carefully. Upon planting, fertilize with a liquid organic garden fertilizer. Green beans require soil that is not too heavy, so if you have clay soil, you'll need to amend yours with some sand or vermiculite to lighten it up. Water the plants as closely to the ground as possible (a drip system works the best) as getting the leaves wet can lead to disease.  As long as you have relatively fertile soil, additional fertilizing should not be necessary.Larger beans tend to be tough and stringy, so harvest your green beans when they’re 5 to 7 inches (13 to 18 cm) long and about the diameter of a pencil. You'll need to harvest every 2 to 3 days.Be certain not to leave beans on the vine, or production will stop. Most green beans are high producers, so it’s not unusual to end up with far more than you can use. If this is the case, allow the pods to mature into shell beans for a treat of a different sort. Green beans can be stored in the warmest part of the refrigerator for about a week. Use perforated bags for best results - they freeze beautifully. Prepare them for cooking by washing and snapping off the ends. Then blanch them for 3 minutes in boiling water before freezing. They can also be canned.",
          "sun_amount": "Full sun (at least 6 hours each day) When planning vegetable crop rotation, group with crops from this family: n/a (perennial) Companion plants",
          "weather_tolerance": "Warm Season – Will not survive frost and their seeds will not germinate in cold soil. Plant them at about the average date of the last 32 degree F (0 degree C) temperature in spring",
          "soil_germ_temp": "70 to 85 degrees F (21 to 29 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1 inch, 3 cm",
          "row_spacing": "for bush beans about 4 inches between plants,for pole beans in hills about 15 inches apart with four plants per hill, for trellises, about 3 inches apart",
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
        }),
        knex('plants').insert({
          "name": "Pole Beans",
          "img": "http://www.growinganything.com/image-files/growing-pole-beans.jpg",
          "description": "Growing pole beans is easy even for beginner gardeners. They grow on vines which must be supported on a trellis, cage or pole, and produce beans continuously throughout their growing period. There are many varieties of pole beans to choose from, and all are best started from seed. Pole beans need well-drained, moist soil and full sun to partial shade for the highest yields. Pole beans like lighter soil. If your soil is mostly clay, you'll need to mix in sand or vermiculite to lighten it up. Pole beans also need support that is about five to eight feet tall. While some gardeners use cages, trellises or poles, many build “teepees” from wood for the pole bean vines to grow on. These can be made from bamboo or other wood or purchased pre-made. Planting instructions depend on the type of support you use (see snapshot box below). Cover seeds with one inch of soil and lightly compress.Water pole beans thoroughly after planting and fertilize with an organic garden fertilizer.Once the pole bean seeds have pushed their way up through the soil, thin the weakest ones and start training the beans to grow up their support.Use mulch to help the soil retain moisture, and water pole beans at a rate of about one inch (2.54 cm) per week. Wet foliage can encourage disease, so water pole beans as closely to the soil as possible and early in the day to give foliage a chance to dry.Pole beans are ready to harvest about seven to fourteen days after the pods have flowered and become firm, fully elongated and crisp. You will need to continually monitor the readiness of these beans, as they produce much better if picked regularly (about every 2 to 3 days). Do not wait until the beans inside the pod have become enlarged, unless you intentially want them to mature into shell beans.You should harvest when foliage is dry and clip beans carefully so as not to damage the branches of the plant. Pole beans should be used immediately or refrigerated soon after harvest. Place beans in a perforated bag and store in the warmest part of the refrigerator for up to one week.To prepare for the freezer, blanch beans for 4 minutes, then drain, cool and package in freezer bags or plastic containers",
          "sun_amount": "Full sun (at least 6 hours each day) When planning vegetable crop rotation, group with crops from this family: n/a (perennial) Companion plants",
          "weather_tolerance": "Warm Season – Will not survive frost and their seeds will not germinate in cold soil. Plant them at about the average date of the last 32 degree F (0 degree C) temperature in spring",
          "soil_germ_temp": "70 to 80 degrees F (21 to 26.6 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1 inch, 2.54 cm",
          "row_spacing": "for pole beans in hills about 15 inches apart with four plants per hill, for trellises, about 3 inches apart, for teepees 6 to 8 inches outside of supports",
          "days_to_germ": "7 to 14 days",
          "soil_ph": "6.0 to 7.5",
          "growing_soil_temp": "70 to 80 degrees F (21 to 26 degrees C)",
          "time_to_harvest": "65 to 80 days",
          "seed_longevity": "3 years",
          "pest": [
            "aphid",
            "cutworms",
            "darkling beetles",
            "earwigs",
            "grasshoppers",
            "loopers",
            "stink bugs",
            "common garden pests"
          ],
          "diseases": [
            "bean rust",
            "curly top",
            "white mold", "mosaic virus"
          ]
        }),
        knex('plants').insert({
          "name": "Beets",
          "img": "http://www.growinganything.com/image-files/growing-beets.jpg",
          "description": "Growing beets from seed is easily one of the most satisfying - and one of the easiest to grow - of all garden crops. Beets are a very old vegetable, as their leaves were consumed even before written history took place. It was not until the 1800s that their nutritious deliciousness was discovered in France.Beets enjoy cool weather, and do best when planted in early winter and spring. Full sun and a light but deep and well-drained soil are necessary for growing beets. It is difficult to find started beet plants in nurseries and garden centers, so your best option is to start plants from seed yourself. Growing beets properly requires that the beet seeds be planted outside three or four weeks before the last frost is expected in your area. You’ll have an early summer crop by planting at this time.Beet seeds may also be planted in late summer for a wonderful fall harvest. When choosing between seed varieties, know that “old” beets tend to be more fibrous than the soft, buttery texture that is common with young beet varieties.  In order to plant beet seeds, they must first be soaked for a period of 24 hours. This helps the seeds to germinate.You’ll want to water newly planted seeds every two weeks. Beware of overwatering beet plants, for this can result in excess foliage. On the other hand, too little water will result in poor yield and hard buttons of beets with a woody taste.Beets are one vegetable that will grow and flourish for almost every gardener.  As with other crops, the addition of compost or aged manure to a bed of young beet plants can improve your yield even further.  But do NOT use a high nitrogen fertilizer, as this causes beets to produce lush leaves and small roots.The beet seeds you buy are actually several individual seeds in one dried fruit, so these plants will grow very close together unless they are thinned, and a pair of scissors is the perfect tool for thinning beets.Once the plants reach a height of about 2 inches, clip the leaves (save them for salads!) and leave the space between the plants’ leaves about 3 to 4 inches apart. Do not let the soil dry out in your beet bed. Beets need continuous moisture to be evenly spread across their growing area.You can harvest beets at any time during their growth cycle.A lot depends on whether you are growing beets for their greens or their roots. The greens are best when the plant is about 4 to 6 inches tall. The roots taste the best after they have been growing for about 40 to 50 days.You want the roots to be between 1 ¼ to 2 inches in diameter for the best texture and taste. If you are going to be storing your beet harvest for any length of time, pick them when the soil is a bit dry so less of it will cling to the roots.Beets are not difficult to store.Beet greens are usually wrapped in plastic wrap and stored in the refrigerator for no longer than 3 to 4 days for optimum freshness.Beet roots may be washed before storage, but need to be completely dry before they are stored. The beet tops should be cut off about 2 inches above the beet roots. Refrigerated beet roots in a plastic bag will last about one to two weeks. Beet roots can also be frozen, but the quality is somewhat diminished.To prepare beets for freezing, trim the tops only. This prevents color bleeding while cooking. Cook beet roots in boiling water until they are tender. Plunge the roots into a cold water bath when tender, then peel, making sure to take off the root and stem. Finally, cut the roots into the desired size and freeze in plastic freezer bags. Beet seeds will last up to 4 years if kept cool and dry.",
          "sun_amount": "Full sun (at least 6 hours each day)",
          "weather_tolerance": "very hardy to hardy - will survive hard frosts and can be planted 2 to 3 weeks before the average date of the last 32 degree F temperature in the spring",
          "soil_germ_temp": "70 to 85 degrees F (21 to 29 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1 inch, 3 cm",
          "row_spacing": "about 4 to 6 inches or 10 to 15 cm",
          "days_to_germ": "5 to 10 days",
          "soil_ph": "6.0 to 7.5",
          "growing_soil_temp": "50 to 85 degrees F (10 to 29 degrees C)",
          "time_to_harvest": "60 to 65 days",
          "seed_longevity": "4 years",
          "pest": [
            "aphid",
            "cutworms",
            "blister beetle",
            "flea beetle",
            "grasshoppers",
            "lygus bug",
            "swift moth",
            "common garden pests"
          ],
          "diseases": [
            "beet mosaic",
            "black root",
            "crusting",
            "mineral deficiency"
          ]
        }),
        knex('plants').insert({
          "name": "Broccoli",
          "img": "http://www.growinganything.com/image-files/growing-broccoli.jpg",
          "description": "Growing broccoli can be easy even for novice gardeners. It is a cool weather vegetable and grows best in the spring and fall of the year, with the fall harvest especially sweet and delicious as the broccoli has fully matured. A member of the cabbage family, broccoli needs full sun and loose, well-drained soil. Broccoli plants do not like heat, so if you live in a tropical climate, growing this vegetable can be tricky, but not impossible.  Many people prefer to buy flats of broccoli seedlings to transplant after the last expected date of frost.Broccoli seeds are small and round, so they tend to get lost when planted directly in the ground. Instead, plant broccoli seeds in seed trays about an inch deep. Space the seeds about 3 inches apart, and be sure to water them daily. Leaving the trays on a table will keep away the slugs and snails that love to munch on them.It will take the seedlings 4 to 6 weeks to be large enough to transplant into the garden, and they need to go into the ground in either late summer or early fall to mid-winter. No matter what time of the year they are planted, broccoli plants need 4 hours of sun per day.Transplant the broccoli seedling into your garden when they have reached a height of about 4 inches, or when you just start to see leaves developing. Plan for rows about two and a half feet apart. Spacing is important if you want to produce broccoli with larger heads... the plants should be anywhere from 18 inches to two feet apart.Assuming your soil is nutrient-rich, you most likely will not need to fertilize broccoli further. Broccoli are very amicable when it comes to harvest, as they continue to produce more tiny heads when the main head is cut right above where the plant’s main leaves connect with the stem. Don’t wait too long to harvest broccoli. You’ll know it’s time when the heads are compact and dark green. If you wait too long, your broccoli will have developed yellow flowers and a much stronger taste.Use a sharp knife to cut the broccoli head off the stem. Cut at an angle to allow water to roll off, which prevents the stem from rotting. Continue to water the stems, as they will produce tiny florets for up to 2 months. Fresh broccoli heads will stay fresh for about a week when refrigerated in a perforated plastic bag.To prepare broccoli for the freezer, cut off the leaves and any woody stems. Separate the heads into florets and chop any remaining stem into small pieces.Prepare a salt bath with a gallon of water and 1 teaspoon of salt to remove any insects that may be lurking in the broccoli, and soak for 30 minutes.Drain the broccoli, then split the florets so that they are about 1 to 1 ½ inches across. Blanch in a hot water bath for 5 minutes. Cool, drain, place into bags or containers, and freeze.",
          "sun_amount": "Full sun (at least 6 hours each day)",
          "weather_tolerance": "hardy will survive hard frosts and can be planted 2 to 3 weeks before the average date of the last 32 degree F temperature in the spring",
          "soil_germ_temp": "65 to 80 degrees F (18 to 26.7 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1/4 to 1/2 inch",
          "row_spacing": "3 inches (7.62 cm)",
          "days_to_germ": "4 to 10 days",
          "soil_ph": "6.0 to 7.5",
          "growing_soil_temp": "60 to 70 degrees F (16 to 21 degrees C)",
          "time_to_harvest": "11 to 15 weeks",
          "seed_longevity": "5 years",
          "pest": [
            "cabbage aphid",
            "crickets",
            "darkling beetles",
            "earwigs",
            "leaf miners",
            "loopers",
            "nematodes",
            "common garden pests"
          ],
          "diseases": [
            "bacteria leafspot",
            "clubroot",
            "white mold"
          ]
        }),
        knex('plants').insert({
          "name": "Brussel Sprouts",
          "img": "http://www.growinganything.com/image-files/how-to-grow-brussel-sprouts.jpg",
          "description": "It doesn’t take much time to learn how to grow Brussel sprouts, and growing Brussel sprouts in your garden is a must... they are one of the healthiest vegetable around. They grow slowly and prefer the cooler weather of fall and spring. Brussel sprouts are also a hardy vegetable than can endure a sudden frost or even light snow with ease. They require well-fertilized soil that has not had other members of the Brassica family (Broccoli, Cabbage, Cauliflower, etc.) growing in it. You’ll want to plant Brussel Sprouts in a sunny location that includes some partial shade. You can plant Brussel sprout seeds indoors or out. Seeds should be planted about one inch deep in firm soil in late summer or early fall. In warmer regions, you can plant the seeds outside through Christmas for a spring harvest. If you transplant, time the planting so that the seedlings are planted outside about three months before the first frost is expected. Plant transplanted seedlings deeply, leaving about one half of the plant above the ground. When the sprouts have grown to about five to seven inches tall, you’ll need to thin them so that they are two feet apart. About six hours of daily sunlight is needed to grow this vegetable successfully. Brussel Sprouts have a high need for nitrogen, so adding a kelp fertilizer (or similar type of organic fertilizer) to the soil is necessary during germination and once or twice a month during growth. In order to help conserve moisture, use organic mulch around the plants. Pull any weeds that may sprout up by hand so as not to disturb the shallow roots of the young plants. You may also need to stake your Brussel Sprouts if you live in an area that gets high wind. As Brussel Sprouts mature, there will be some yellowing of the leaves. Keep these leaves picked off so that the sprouts have more room to develop. You’ll know your Brussel sprouts are ready for harvest when you see small, firm green balls on the stem of the plant that are about an inch (25 mm) in diameter, Twist the sprouts off of the stem to harvest. If a severe freeze is expected, uproot your Brussel Sprout plants, take off any leaves, and hang the plant upside down in a cool spot so that you can continue to harvest the sprouts for a few more weeks. Brussel Sprouts may be stored in the refrigerator for up to three weeks before losing freshness. A perforated storage bag is necessary so that the sprouts can “breathe”. To freeze Brussel Sprouts, first soak them for thirty minutes in a solution of four teaspoons salt mixed with one gallon of water. This will remove and insects that may be lurking. Sort the sprouts according to their size. Water or steam blanch small sprouts for three minutes, medium sprouts for four minutes, and large sprouts for five minutes. Cool, then drain, place into containers and freeze. Brussel sprout seeds are good for about four years.",
          "sun_amount": "partial shade",
          "weather_tolerance": "half hardy- will survive light frost",
          "soil_germ_temp": "65 to 85 degrees F (18 to 29 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1 inch, 3 cm",
          "row_spacing": "16 to 24 inches, 40 to 61 cm",
          "days_to_germ": "5-10 days",
          "soil_ph": "6.0 to 6.8",
          "growing_soil_temp": "60 to 70 degrees F (16 to 21 degrees C)",
          "time_to_harvest": "15 to 18 weeks",
          "seed_longevity": "4 years",
          "pest": [
            "cabbage aphid",
            "cutworms",
            "darkling beetles",
            "earwigs",
            "harlequin bug",
            "loopers",
            "snails",
            "common garden pests"
          ],
          "diseases": [
            "downy mildew",
            "clubroot",
            "white mold"
          ]
        }),
        knex('plants').insert({
          "name": "Butternut Squash",
          "img": "http://www.growinganything.com/image-files/growing-butternut-squash.jpg",
          "description": "Growing butternut squash - and all winter squash for that matter - is a great way to get your veggies well into fall. It is known as a winter squash because it is one of the last vegetables harvested before the fall frost. (Note: The advice on this page applies to most types of winter squash)   You'll find that its flavor is similar to that of other fall favorites, like pumpkin and other winter squash. It can be prepared in many different ways, from savory to sweet. Butternut squash can require 100 days or more to mature, so they must be planted in early summer in order to be harvested before the first frost. If they are left out to experience the first frost, the fruits will be damaged. Butternut squash requires warm, fertile soil that must drain well, so some sand is required in your soil mix. Because of the long time to maturity and the fact that neither the plants nor fruits can tolerate frosts, you must plant your squash as soon as possible in many areas. You can also start seeds indoors before the last frost date and move the seedlings to the garden after the danger of frost has passed. The long growing season of butternut squash – like all winter squash – produces huge fruits that require plenty of water and nutrients.  When preparing the soil, be sure to use plenty of compost that’s tilled at least a couple of feed into the soil.  Adding seaweed will give them an even greater boost.Butternut squash’s size also requires plenty of room to grow. It should be planted in a way that allows enough space between plants to allow for trailing vines and large fruits – 18 to 36 inches depending on the variety. If you’re not careful, butternut squash will take over your garden… it’s a vine, after all.  To avoid this, plant it at your garden’s edge and keep the vines trimmed and angled in a way that they won’t affect surrounding crops.Butternut squash is not difficult to grow, but like other squash, the plants are subject to fungus and must be watched carefully during the growing season. They like hot temperatures and require full sun like most vegetables.  As mentioned above, they will perform best in fertile, consistently moist and well-drained soil. They should also be checked for pests such as pickleworms regularly. Simply pick the pests off the vines and fruits. In order to maintain warm soil temperatures and to ward off pests and garden weeds, many winter squash growers use row covers made of black or IRT plastic or landscape fabric with holes cut out that allow the squash to come through. Butternut squash will be ready to harvest between 75 and 120 days after germination. You’ll know its ready when fruits are between beige and light tan. If there is still a greenish tint to the fruit, it's not ready yet.  Ready-to-harvest butternut squash also have shriveling and drying stems and extremely hard skin.To remove them from the garden, cut the stems about an inch (2.5 cm) up from the fruit. The fruits are too heavy for the stem to bear its weight, so DO NOT handle the harvested fruit by the stem. It is critical to harvest all the squash before the first heavy frost to avoid damage to the fruits. When you harvest your butternut squash, be certain to leave a little of the stem attached to the fruit if you plan to store them. Once harvested, butternut squash and other winter squash keep for long periods of time. In fact, you'll notice that the squash have a sweeter and milder flavor after about two months of storage than they have just after harvesting. Butternut squash can be stored for several months if kept in a moderately warm, dry place. If you plan to store the squash, leave a little of the stem attached to the fruit and let it lie out in the sun for a few days after harvesting. Do not wash squash that you plan to store.",
          "sun_amount": "Full sun (at least 6 hours each day)",
          "weather_tolerance": "Warm Season – Will not survive frost and their seeds will not germinate in cold soil. Plant them at about the average date of the last 32 degree F (0 degree C) temperature in spring",
          "soil_germ_temp": "70 to 95 degrees F",
          "life_cycle": "Annual",
          "planting_depth": "1/2-1 inch, 1.3-3 cm",
          "row_spacing": "18 inches or 24-36 inches for larger varieties",
          "days_to_germ": "5 to 10 days",
          "soil_ph": "5.5 to 7.5",
          "growing_soil_temp": "70 to 95 degrees F (16 to 24 degrees C)",
          "time_to_harvest": "75 to 120 days",
          "seed_longevity": "4 years",
          "pest": [
            "aphid",
            "cutworms",
            "darkling beetles",
            "earwigs",
            "grasshoppers",
            "loopers",
            "stink bugs",
            "common garden pests"
          ],
          "diseases": [
            "root rot",
            "curly top",
            "white mold"
          ]
        }),
        knex('plants').insert({
          "name": "Cabbage",
          "img": "http://www.growinganything.com/image-files/growing-cabbage.jpg",
          "description": "Growing cabbage is an easy plant for beginners that belongs in all vegetable gardens. It also stores better than most veggies, ensuring that it’ll be there for you well into the winter. Cabbage plants need plenty of sun and a rich, moist soil that drains well in order to reach their peak of goodness.Cabbage seeds should be started indoors in a seed flat about eight weeks before you want to plant them in your garden. Plant the seeds about one quarter inch deep in rich, well drained soil. Firm the soil and place the seeds on top, then thinly cover with more soil. Cabbage seeds that are planted too deeply will not grow. Keep the temperature of the soil at 72 degrees minimum (22.2 C) for four to five days until seedlings peek out, and then drop the soil temperature back down to 55-60 F (12.8-16 C) to keep the seedlings from becoming thin and leggy.Cabbage may also be purchased as young plants from nursery and garden centers. These should be planted about 12 inches apart in rows spaced anywhere from 24 to 36 inches apart. Spacing depends on the type of cabbage planted, as some need more room than others.Wait to transplant the plant at least until the point that it has three or four leaves. Once your cabbage plants have gone into the ground, use an organic garden fertilizer for vegetables.Add an organic nitrogen fertilizer when the plants are about half grown.Young cabbage plants need ample water, especially when growing in warm weather, and they do best with at least 6 hours of full sun. You can harvest your cabbage at any time after the heads of the plant have formed, although many claim that smaller softball-sized heads are tastier. Cut the heads from the plants when they are firm, but before they have become so solid and large that they have started to crack or split.Harvest any split or cracked heads as soon as possible before they become unusable. The stump of plant left in the ground will produce a second crop of smaller but leafy heads.To store cabbage heads after they are harvested, first remove the loose outer leaves until you are left with a smooth ball. Cabbage may be stored for up to two months in the refrigerator, a cold cellar, or even in an outdoor pit for up to two months. Place heads of cabbage in plastic bags.Frozen cabbage is suitable only as a cooked vegetable. You may cut the cabbage into shreds or wedges, or simply separate the leaves from the head to freeze whole. Water blanch cabbage for one to two minutes, depending on the size of the head, then cool, package and freeze.",
          "sun_amount": "Full sun (at least 6 hours each day)",
          "weather_tolerance": "hardy- will survive hard frost",
          "soil_germ_temp": "72 to 79 degrees F (22 to 26 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1/4 to 1/2 inches",
          "row_spacing": "24 to 26 inches",
          "days_to_germ": "7 to 12 days",
          "soil_ph": "6.0 to 7.5",
          "growing_soil_temp": "45 to 95degrees F (7 to 35 degrees C)",
          "time_to_harvest": "32 to 40 weeks",
          "seed_longevity": "4years",
          "pest": [
            "cabbage aphid",
            "crickets",
            "darkling beetles",
            "earwigs",
            "garden symphylans",
            "loopers",
            "snails",
            "common garden pests"
          ],
          "diseases": [
            "clubroot",
            "mildew",
            "white mold"
          ]
        }),
        knex('plants').insert({
          "name": "Carrots",
          "img": "http://www.growinganything.com/image-files/growing-carrots.jpg",
          "description": "Growing carrots is a relatively easy task, but it requires patience.  Carrots need full sun and rich, loose sandy loam soil. They do not transplant well, so you’ll need to sow them directly in your garden a couple of weeks before the last frost of the season.  Carrots grow best in deep, nutrient-rich soil.Their seeds do not germinate quickly, so it's a good idea to mix some fast-sprouting radish seeds in with the carrots seeds in order to mark the row.  The radish seedlings will also help the tiny carrot seedlings emerge by loosening any crusted soil.When planting carrot seeds, do your best to space them about ½ inch (12.7 mm) apart.  Any closer and you’re thinning job will be much more demanding as they grow.Carrot seeds prefer warm, moist soil. To keep the soil temperature up, gardeners in cooler climates should place plastic mulch over the newly planted carrots until the tops start to peek out. After they do, consider covering your carrots with sawdust, vermiculite or sand in order to protect the new seedlings and help keep the soil moist.If you planted your carrot seeds thickly, then you will need to thin them once the plants are about three inches tall. This can be done with a garden rake, but it’s better to be more precise with some floral shears.  Leave no less than 2 inches (5 cm) between each plant.Excessive thinning can attract the carrot root fly, so be sure to place the cuttings in your compost pile. For ideal taste and growth, try to keep the carrot’s soil temperature below 70 degrees F (21 C). During your carrots’ growth, remove any garden weeds by hand. Apply mulch as needed to help conserve soil moisture or and grass clippings to maintain lower soil temperatures.Continue to ensure that carrots get full sun and plenty of moisture. Harvest spring carrots before the weather gets too hot, and harvest fall crops before the first freeze. You can determine when your carrots are the size you want by looking at their tops, which should be poking through (or be slightly below) the soil.Harvest by pulling your carrots out of the ground by hand. Grab the carrot roots directly (not the tops which tend to break off) and yank them from the soil. If you are having problems, you can use a trowel to help pry the carrots from the ground.To store carrots, wash them then cut off their stems down to about 1 inch (2.5 cm) above the root, then place into perforated plastic bags.  They’ll keep in the refrigerator for two to four months.Carrots may also be stored outdoors in a pit and underneath a heavy layer of mulch. Others choose to store their carrot harvest in a cold cellar.  If you take this route, layer them in damp sand or sawdust. To prepare carrots for freezing, remove tops, wash and peel. Small carrots can be left whole, while larger carrots can be cut into thin circles, lengthwise strips or small cubes. Blanch whole carrots for five minutes and blanch lengthwise-cut, diced or sliced carrots for two minutes. Cool, drain, package and freeze.",
          "sun_amount": "Full sun (at least 6 hours each day)",
          "weather_tolerance": "hardy- will survive hard frosts",
          "soil_germ_temp": "70 to 85 degrees F (21 to 29 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1/2 inch, 12.7 mm",
          "row_spacing": "about 2 to 3 inches apart",
          "days_to_germ": "6 to 10 days",
          "soil_ph": "5.5 to 7.0",
          "growing_soil_temp": "45 to 85 degrees F (7.2 to 30 degrees C)",
          "time_to_harvest": "65 to 70 days",
          "seed_longevity": "3 years",
          "pest": [
            "aphid",
            "carrot rust fly",
            "darkling beetles",
            "flea beetles",
            "grasshoppers",
            "white flies",
            "common garden pests"
          ],
          "diseases": [
            "soft rot",
            "leaf spots",
            "white mold"
          ]
        }),
        knex('plants').insert({
          "name": "Cauliflower",
          "img": "http://www.growinganything.com/image-files/growing-cauliflower.jpg",
          "description": "Growing cauliflower can be difficult for many gardeners, as this plant is very picky about temperature and moisture. It prefers cool weather, and is best grown in the spring and fall. Cauliflower need firm, rich, well-drained soil and prefer full sun.   While seeds may be germinated in an outdoor seed bed and moved to their permanent bed later, it is much easier to sow cauliflower seeds indoors. And be sure to pay attention to the below germination soil temperatures for these picky plants.If you take the outside route, plant seeds one half inch deep and six inches apart. Cover with soil, then lightly firm soil with a garden rake. Keep the soil moist while the seeds are germinating. Proper soil pH – between 6.5 and 7 - is also essential to prevent disease. Regardless of whether you start them inside or out, preparing the soil beforehand is extremely important. A fairly heavy soil that’s well augmented with organic compost is key to those big, creamy heads. Once your cauliflower seedlings are four to five weeks old, they may be placed in their permanent bed, which should receive full sun. Space the seedlings fifteen to eighteen inches apart with about twenty-four to thirty-six inches between the rows.To ensure the formation of good heads, water the plants well early in their growth season. Fertilize the leaves every two weeks until harvest with an organic foliar fertilizer (liquid fertilizer), as more nutrients are absorbed by the plant using this method.For white cauliflower varieties, consider blanching (blocking out the sun) when the head is between two and three inches (5 to 7.5 cm) wide in order to maintain the optimal texture, taste and white color.  To do so, fold enough of the plant’s leaves over the head so the head is completely shielded from the sun and tie them together with garden twine or a rubber band.Your cauliflower will be ready for harvest between four days (warm weather) and ten days (cooler weather) after tying the leaves for blanching, so keep a daily lookout to make sure you don’t leave them too long.Cauliflower should be picked when the heads are full and tight. If the florets which form the head have started to separate, the head is past prime harvest time. You may use a clean, sharp knife to cut the heads from the plants.A full head of cauliflower is best stored in a perforated plastic bag situated in the crisper section of a refrigerator. They will last two to three weeks under these conditions. Cauliflower may be broken into florets and placed in a sealed plastic bag, then refrigerated. The florets will stay fresh for about a week. For freezing and storing cauliflower for up to six months, cut it into small pieces, then make brine with one gallon of water and four teaspoons of salt and immerse it into this mixture for about thirty minutes to remove any insects. Drain, and then blanch cauliflower in more salted water plus two to three tablespoons of lemon juice to help prevent darkening. Cool, drain, package and freeze.",
          "sun_amount": "Full sun (at least 6 hours each day)",
          "weather_tolerance": "half hardy- will survive light frosts.  Seeds germinate at low soil temperatures",
          "soil_germ_temp": "75 to 80 degrees F (24 to 27 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1/2 inch",
          "row_spacing": "12 inches",
          "days_to_germ": "7 to 14 days",
          "soil_ph": "6.0 to 7.5",
          "growing_soil_temp": "60 to 75 degrees F (16 to 24 degrees C)",
          "time_to_harvest": "50 to 55 days",
          "seed_longevity": "4 years",
          "pest": [
            "cabbage aphid",
            "cutworms",
            "darkling beetles",
            "earwigs",
            "leafminers",
            "loopers",
            "snails",
            "common garden pests"
          ],
          "diseases": [
            "clubroot",
            "mildew",
            "ringspot"
          ]
        }),
        knex('plants').insert({
          "name": "Celery",
          "img": "http://www.growinganything.com/image-files/growing-celery.jpg",
          "description": "Growing celery can be a challenge, as it has a reputation among gardeners as being a rather fussy, high maintenance plant. However, as long as the soil and water requirements are met, you can grow celery so tender and sweet, you will never buy it at the market again!  Celery is a marsh plant, so it needs lots of moisture and fertile soil as well as some sunshine each day. It does best in cool climates. Celery has a long growing period of around five months, so careful planning with your local weather in mind is essential for a successful harvest.Celery seed should be started indoors about eight to ten weeks before the last frost of spring. Once the seedlings have five to six leaves, which should occur about two to three weeks before the last average frost date, they may be transplanted to the garden.If you live in a region that has cool springs and summers, it is fine to plant celery in the early spring. If your area has warm spring and summer weather, plan to place celery transplants in your garden in the late summer for a fall or early winter harvest. Once seed transplants are in their permanent bed outdoors, keep the soil moist and remove garden weeds promptly. Use organic garden fertilizers every two to four weeks, as celery is a heavy feeder.  Plus its shallow, compact roots don’t allow it to venture too far out to find the nutrients it needs.If you notice that your celery has a bitter taste, try this out…  about ten to fourteen days before harvest, blanch (slow enzyme action by blocking out the light) your celery plant either by mounding soil around the stalks or fastening cardboard around the plant to shield it from the sun. Your crop won’t be as green after blanching, but it should taste much less bitter.Start harvesting your celery crop before the first hard frost is scheduled for your area. When the base of each celery plant is about two to three inches in diameter, they are mature and ready to be picked.With a sharp knife, cut the celery right at the soil level, or slightly below if you prefer.You may store celery for 7 to 14 days in a plastic bag in the refrigerator after rinsing, drying and removing any blemished or damaged leaves and/or stalks.Freezing celery causes the vegetable to lose its crispness, though it is still good to use in cooked dishes and stews. Before freezing, blanch celery stalks in boiling water after cutting them into one inch lengths. Then, you may drain, cool, and package. Celery stalks may also be frozen as is with no blanching.",
          "sun_amount": "Full sun or partial shade",
          "weather_tolerance": "half hardy- will survive light frosts",
          "soil_germ_temp": "70 to 75 degrees F (21 to 24 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1/2 inch, 12.7 mm",
          "row_spacing": "12 inches",
          "days_to_germ": "7 to 12 days",
          "soil_ph": "6.0 to 6.9",
          "growing_soil_temp": "60 to 70 degrees F (16 to 21 degrees C)",
          "time_to_harvest": "25 to 40 weeks",
          "seed_longevity": "2-3 years",
          "pest": [
            "aphids of several varieties",
            "armyworm",
            "lygus bug"
          ],
          "diseases": [
            "viruses",
            "crater rot",
            "blight"
          ]
        }),
        knex('plants').insert({
          "name": "Corn",
          "img": "http://www.growinganything.com/image-files/growing-corn.jpg",
          "description": "Growing corn is relatively straightforward as long as you give it plenty of water, plant it in nutrient-rich soil and allow it to get plenty of sunlight.  Corn grows quickly and is not too picky about the type of soil it grows in, though clay soil will need some compost added for best results. There are three groups of corn most commonly grown for the table and freezer. The main difference is in the sugar content. These are normal sweet, sugary enhanced sweet and super sweet. Corn seed comes in yellow, white, and bicolor varieties. Corn seed may be started indoors or directly planted in the ground. Indoors or out, plant the seed about one inch deep, three to four inches apart in a rich soil with good drainage. Corn should ideally be planted in the northern part of the garden area so they don’t stop sunshine from reaching shorter plants. Plant corn after the soil has warmed to around 70 to 75 degrees and after all danger of frost has passed (corn seeds won’t germinate below 60 degrees F (15.6 C)). Corn is a heavy feeder, so ensure that the plants get a healthy helping of compost when they are about 15 inches high.  Organic garden fertilizers suitable for corn include partially rotted manure, blood meal and fish emulsion.Full sun and ample moisture are essential for proper growth.  A drip irrigation system works great for corn.Once the plants are about 6 feet high, mound soil around their bases so the roots stay cool and covered. Mulch will help to retain moisture and keep most garden weeds at bay. You’ know when your corn is ready to pick because the ear will be completely filled with kernels. These kernels will leak a milky, white liquid when pierced. Another sign that corn is ready for picking is a brown, crisp silk peeking out of the leaves.Most corn will be just right to harvest about 20 days after you can see the silk begin to grow. When it’s time to pick corn, simply grab the ear, twist and pull down and snap it from the stalk.Normal sweet corn may be stored in the refrigerator for about two days before it starts to lose its fresh-picked quality, although the corn varieties that are more sugary will keep in the refrigerator for a week or more. You will need to husk ears of corn before placing them in plastic bags for refrigerator storage. To freeze corn, husk, trim, de-silk and wash the ears, then water blanch from four to seven minutes, depending on whether the corn will stay on the cob (needs closer to 7 minutes on the cob) or be cut off to make whole kernel or cream style corn (closer to 4 minutes).Once blanched, remove from water, cool completely, then freeze ears or cut or scrape the corn from the ears. Package corn, then seal and place into freezer.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season - will not survive frosts",
          "soil_germ_temp": "60 to 85 degrees F (15 to 29 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1 inch or 3 cm",
          "row_spacing": "10 inches",
          "days_to_germ": "10 to 12 days",
          "soil_ph": "5.5 to 7.0",
          "growing_soil_temp": "70 to 75 degrees F (16 to 21 degrees C)",
          "time_to_harvest": "12-15 weeks",
          "seed_longevity": "2 years",
          "pest": [
            "aphids",
            "cutworm",
            "thrips"
          ],
          "diseases": [
            "common smut",
            "stalk rot",
            "rust"
          ]
        }),
        knex('plants').insert({
          "name": "Cucumbers",
          "img": "http://www.growinganything.com/image-files/growing-cucumbers.jpg",
          "description": "Growing cucumbers correctly will produce a bountiful and ongoing crop, ensuring their irreplaceable addition to your salads all summer long. If you plant the right varieties, you can also make great pickles that can be enjoyed throughout the year.  Cucumbers were first cultivated in India over 3,000 years ago and spread throughout Europe over the following centuries.   They were one of the first vegetables grown by the colonists in America as well. Cucumbers require full sun and well-drained acidic soil and can be a bit more difficult to grow than some of the easier vegetables.Cucumbers come in two primary varieties. It's important that you decide which type you need before you buy seeds. There are pickling cucumbers, which, as you may have guessed, are typically grown for making pickles. These varieties bear short, stocky fruits. Slicing cucumbers are longer, and should usually be grown on a trellis to keep the fruits uniform. Trellised cucumbers are also less likely to be attacked by pests and will free up space in your garden for other veggies (plus they’ll grow straighter!). You can also plant bush varieties, which will take up less space without needing to be trellised.Cucumbers cannot tolerate even a light frost, so it's important to wait until the soil has warmed to at least 80 degrees before planting them in the garden. To get around this issue – especially in cooler climates - many gardeners start their seeds indoors about 2 to 3 weeks before the last frost and then transplant the seedlings into the garden once the soil has warmed.Either way, be sure to work in at least an inch of compost to their garden spot before you plant them for higher yields and better taste. Cucumbers are 95% water and will not bear if they are allowed to dry out, so be sure to keep the soil good and moist.  They also require full sun, so keeping them adequately moist as the weather grows warmer can be a challenge.Cucumbers warmth requirement causes them to deplore frost, so do all you can to avoid it.While they’ll likely do fine without additional fertilizing in a fertile garden, go ahead and add some organic matter when side shoots begin to emerge. Cucumbers should be cut from the vine when they have reached a reasonable size and while the fruits are still green in color. Yellow cucumbers are overripe, and will stop the production of further fruits if they are left on the vine.It's important to cut the fruits from the vine with a sharp knife rather than pulling them. Keep in mind the variety of cucumber you've planted when determining whether the cucumber has reached the right size for picking. Remember that pickling cucumbers are much shorter when mature than slicing cucumbers.  You may also find that shorter slicing cucumbers taste better!",
          "sun_amount": "Full sun at least six hours",
          "weather_tolerance": "warm season- will not tolerate frosts",
          "soil_germ_temp": "at least 70 degrees- preferably 80 to 95 degrees F (27-35 C)",
          "life_cycle": "Annual",
          "planting_depth": "1/2 inch, 12.7 mm",
          "row_spacing": "12-18 inches",
          "days_to_germ": "3 to 5 days",
          "soil_ph": "5.5-7.5",
          "growing_soil_temp": "70 to 95 degrees F (21 to 35 degrees C)",
          "time_to_harvest": "12 weeks",
          "seed_longevity": "5 years",
          "pest": [
            "aphids of several varieties",
            "armyworm",
            "white flies"
          ],
          "diseases": [
            "leaf spot",
            "root rot",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Eggplant",
          "img": "http://www.growinganything.com/image-files/growing-eggplant.jpg",
          "description": "Growing eggplant is a great way to add variety and nutrition to your diet, especially in warmer climates. Those in colder climates will most likely need to grow them in containers. Eggplants need full sun and fertile, well-drained soil in order to flourish.  Eggplant is part of the nightshade family, which means it's a relative to the potato and tomato, though its flavor and uses are quite different. Eggplant has been a staple in the Mediterranean diet for many years, but has recently become quite popular in other parts of the world. In addition to being a delicious and nutritious vegetable that can be prepared in many ways, eggplant is also a very ornamental plant. For gardeners that lack space, eggplant is easily grown in a container, as well. Eggplant is extremely sensitive to cold. For best results, start them indoors six to nine weeks before the last frost if you wish to grow them from seed. You can also choose seedlings from the garden center if you don’t want to start them from seed.Soak seeds overnight before starting, and give them heat from below, such as from a heat mat, to encourage germination. If you have a heat lamp, now’s the time to use it. When you transplant your seedlings to the garden or container, or when your eggplants sown from seed become at least 3 inches tall, they should be mulched. It's also a good idea to interplant an early crop – such as lettuce - between the eggplants.When you see blooms, apply liquid organic garden fertilizer for vegetables. It should be reapplied monthly until harvest and plants should receive about 1 to 1 ½ inches (2.5 to 3.8 cm) of water each week.Eggplant should be harvested when fruits are 6 to 8 inches long and the skin has a high gloss. Use a sharp knife to cut the fruits from the plant.When the fruits become dull or brown, they are too mature for use. Three weeks before the first expected frost, start pinching back any blooms that appear. Since the fruits from those blooms would not have time to mature anyway, it's better for the plant to expend its energy on maturing existing fruits.",
          "sun_amount": "Full sun of at least six hours a day",
          "weather_tolerance": "warm season- will not survive frost and seeds will not germinate in cold soil",
          "soil_germ_temp": "70 to 75 degrees F (21 to 24 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1/4 inch/ 6mm",
          "row_spacing": "18-24 inches",
          "days_to_germ": "7 to 14 days",
          "soil_ph": "5.5-7.0",
          "growing_soil_temp": "70+ degrees F (21+ degrees C)",
          "time_to_harvest": "60-80 days",
          "seed_longevity": "4 years",
          "pest": [
            "aphids of several varieties",
            "armyworm",
            "hornworms"
          ],
          "diseases": [
            "viruses",
            "crown rot",
            "verticulum wilt"
          ]
        }),
        knex('plants').insert({
        	"name": "Garlic",
        	"img": "http://www.growinganything.com/image-files/planting-garlic.jpg",
        	"description": "Planting garlic is the perfect way to keep your gourmet kitchen (and wallet) stocked all year with this kitchen staple that is used to flavor so many dishes. Fortunately, garlic is easy to grow, even for the beginning gardener. Garlic is planted from a single clove which will mature into a bulb that has up to eighteen cloves. Select the largest clovesfor planting and be sure that it’s in a location that gets full sun and has well - drained soil. Garlic is planted in the fall about a month before the first frost and then harvested the next summer. It can be planted in early spring, but the crop will not be as prolific as garlic that has been in the ground throughout the entire winter. When planting in winter, protect the bulbs by laying down a healthy layer of leaf or straw mulch. Plant garlic near your roses and both will thrive. Garlic will grow well in average garden soil as it is well drained, and the plants don't often need watering unless there's a dry spell. Too much water may cause the bulbs to rot. They should not be watered after the summer solstice, as this is when the bulb is maturing. After the last spring frost, remove the straw or leaf mulch and replace it with compost in order to encourage growth. Side dressing the garlic with compost when the soil warms in the spring will also help to encourage larger bulbs. Garlic should be harvested when the first six leaves of the plant turn yellow to brown and die down. Garlic should always be dug up, rather than pulled up, to avoid breaking off the bulb. Dry out garlic in the sunfor a couple of weeks before storing. Garlic is easy to store as long as it is kept in a dry place with air circulation. It also freezes quite well. Simply separate the bulbs and store in freezer bags. If you have several months worth of garlic, it's often wise to freeze some and keep some stored in a cool dry place. Next year's garlic can be grown from a clove,and cloves are usually good until they have dried up or rotted.",
        	"sun_amount": "Full sun or partial shade",
        	"weather_tolerance": "usually hardy",
        	"soil_germ_temp": "does not apply -grows in cloves",
        	"life_cycle": "Annual",
        	"planting_depth": "1/2 inch, 12.7 mm",
        	"row_spacing": "5 inches",
        	"days_to_germ": "n/a",
        	"soil_ph": "5.5-7.5",
        	"growing_soil_temp": "55-75 degrees F (13-24 degrees C)",
        	"time_to_harvest": "20 weeks",
        	"seed_longevity": "n/a",
        	"pest": [
        		"bulb mites",
        		"maggots",
        		"thrips"
        	],
        	"diseases": [
        		"basal rot",
        		"downy mildew",
        		"white rot"
        	]
        }),
        knex('plants').insert({
          "name": "Hops",
          "img": "http://www.growinganything.com/image-files/growing-hops.jpg",
          "description": "Growing hops is relatively simple as long as they’re planted in nutrient-rich, well-drained soil, get full sun and have a tall trellis on which to grow.  Assuming you plan to grow hops for beer brewing, be sure to grow the female plant since its cones are the part that’s harvested for that purpose. If you’re a small-time brewer, one plant should be plenty. The most common way to start hops is to purchase and plant an underground stem (also called a ‘rhizome’) from a mature female plant. Store them in a cool, moist and well-ventilated place until you’re ready to plant.Also pay close attention to the condition of the rhizomes when they arrive…if they appear poorly developed, diseased, moldy or damaged, do NOT plant them.Like most plants, hops prefer fertile soil.  Before planting, till a healthy layer of compost along with a small amount of organic garden fertilizer about one foot (30 cm) down into your soil. Set up a high trellis or place them against an outdoor wall, fence or flag post for them to grow up. If you choose a wall, hanging a cord or two from the top will most likely be enough for the vines to hold on to.  Hop plants can grow up to 30 feet or more so the more room you can give them, the better.Get your hops rhizomes into the ground as soon as possible after the last hard frost. When planting, place the root cutting horizontally in a 6 inch (15 cm) hole with the sprouts facing up, then loosely cover with a two inch (5 cm) layer of soil.If you plant more than one rhizome, space them about three to five feet (91 to 152 cm) apart.  Three feet is fine for plants of the same variety; Five feet between different   varieties to keep the vines from tangling and getting the cones mixed   up (thanks to Chris M. for his input on this!).Apply a healthy layer of organic mulch around the planting spot to help the soil retain moisture and to keep weeds at bay.After you’ve gotten your hops started there’s very little work required until harvest time. Just be sure they get plenty of water, doing your best to avoid getting the vine wet in the process (to prevent disease).When your vines have grown to about 12 inches (30 cm), cut away all but the three healthiest looking vines and train them clockwise up their support or cord.Hops are usually harvested in August and September, depending on your location and climate .  The cones (female hop flowers) are checked for ripeness by the way they look, feel and smell.They’re ready when the cones are giving off a nice aroma and are just beginning to dry.  They should also have changed from bright green to light green or yellowish in color.To harvest your hops, cut them from the vine with scissors or garden shears one by one as they ripen (using a ladder for the higher-ups) or take them down all at once by cutting the vine at its base, unwinding and pulling it down.Hop cones should be dried out immediately after picking.  Simply place them on a sheet in a well-ventilated and protected area until they are completely dry.",
          "sun_amount": "Full sun or partial shade",
          "weather_tolerance": "half hardy- will survive light frosts",
          "soil_germ_temp": "70 to 75 degrees F (21 to 24 degrees C)",
          "life_cycle": "perennial",
          "planting_depth": "6 inches",
          "row_spacing": "3-5 feet",
          "days_to_germ": "49-56 days",
          "soil_ph": "6.0 to 7.5",
          "growing_soil_temp": "60 to 70 degrees F (16 to 21 degrees C)",
          "time_to_harvest": "13-16 weeks",
          "seed_longevity": "2 years",
          "pest": [
            "aphids",
            "mites"
          ],
          "diseases": [
            "downy mildew",
            "powdery mildew",
            "verticuillium wit"
          ]
        }),
        knex('plants').insert({
          "name": "Horseradish",
          "img": "http://www.growinganything.com/image-files/growing-horseradish.jpg",
          "description": "Growing horseradish in your home garden is an easy task. It prefers rich soil, adequate moisture, full sun to partial shade and room to spread out in its garden bed, but even without these it often flourishes.  Horseradish enjoys the cold and needs time in the ground during the fall and winter to help develop and intesify its flavor. Horseradish is not usually grown from seed as the plants do not set seed in most regions. Most gardeners use root divisions from an already established plant in order to start a bed of horseradish. In early spring, plant root cuttings in soil that has been enriched with organic matter. Make furrows six inches deep in the soil, and plant the divisions so that their tops are three inches below the soil surface. Typically, no fertilization is needed for horseradish, but some gardeners feel that organic garden fertilizer containing potassium is helpful.A final and important note about planting horseradish: Do not plant in the same beds as the rest of your crop.  If you do, it’s likely that it will spread and that you’ll never be able to get rid of it.  Instead, give it its own bed or container or bury a plastic tub around it in the ground.Once you have carefully planted your horseradish root divisions, what’s next? In the case of horseradish, not much!Once planted, horseradish grows with very little care. Keep the planting bed evenly moist, and watch the foliage jump!  Consider fertilizing once a year with organic matter.Harvesting horseradish roots usually takes place in the fall, right after the first frost of the season. However, some gardeners prefer to harvest their crop in the early spring, the time when the plant needs to be divided. Some also say that one year old plants have the best taste. To harvest, use a spade to dig down and around the plant until you can gently lift it out of the ground.  Cut off some of the side shoots and replant them for your next crop of horseradish, then use a brush to remove any soil from the roots.Mulch the replanted horseradish with leaves or straw after harvest.Fresh horseradish may be peeled and grated to eat fresh or be pickled.It may also be frozen, though freezing whole roots is not recommended.  Whole roots should be stored unwashed in a plastic bag and kept in the refrigerator. Once horseradish has been cut, it will lose flavor and start to dry out, so use it quickly unless you plan to keep it in vinegar to preserve it.",
          "sun_amount": "Full sun or partial shade",
          "weather_tolerance": "hardy- will survive frosts",
          "soil_germ_temp": "70 to 75 degrees F (21 to 24 degrees C)",
          "life_cycle": "perennial",
          "planting_depth": "2-3 inches",
          "row_spacing": "15-18 inches",
          "days_to_germ": "n/a use root cuttings",
          "soil_ph": "5.5-6.8",
          "growing_soil_temp": "45-75 degrees F (7-24 degrees C)",
          "time_to_harvest": "140-160 days after planting",
          "seed_longevity": "n/a",
          "pest": [
            "aphids of several varieties",
            "cabbage worm",
            "flea beetles"
          ],
          "diseases": [
            "leaf spot",
            "root rot",
            "white rust"
          ]
        }),
        knex('plants').insert({
          "name": "Kale",
          "img": "http://www.growinganything.com/image-files/growing-kale.jpg",
          "description": "Growing kale, a relative of the cabbage, is an easy task in any climate including those with harsh winters and frequently cloudy skies… This extremely hardy plant actually tastes better after a frost or two, so planting in the summer two to three months before the first frost will yield you the most flavorful results come late fall/early winter. If you live in a cooler climate with mild summers you can also plant kale in early spring.Plant seeds about ½ inch (12.5 mm) deep and about 18 inches (46 cm) apart in nutrient-rich, well-composted and well-drained soil. While kale will grow relatively well in partial shade, give it full sun if possible. Keeping your kale plants well-watered will encourage strong growth and prevent their leaves from getting overly tough, but stop watering after the first frost (for fall/winter crops) to prevent frost damage. For even more rigorous growth, add a thin layer of aged compost every six weeks. Organic garden fertilizer for vegetables, while probably not necessary, will also provide a boost if applied every couple of weeks.Depending upon the type of kale plants you have, harvest time is here when the leaves are either blue-green or bright green.  For a tastier harvest, wait until the first frost before harvesting.  And remember… there’s no rush!  Kale can be harvested throughout the winter as long as it’s protected by a healthy layer of straw mulch.To harvest individual leaves, start with the outer leaves first and cut off the stems with garden shears or scissors.  To harvest the entire plant, cut it off a couple of inches (5 cm) above the soil.Kale leaves do not store well, but you can keep your harvested plants in plastic bags for up to 2 weeks.  As mentioned above, just leave it in the ground if you want it to last throughout the winter.  It should be good in the ground for at least two months after the first frost (longer in warmer climates). For longer out-of-ground storage, wash the leaves, remove their stems, water blanch for two minutes (less for younger leaves),  then cool, drain, seal and freeze.",
          "sun_amount": "Full sun or partial shade- prefers more sun",
          "weather_tolerance": "hardy- will survive light frosts",
          "soil_germ_temp": "45-85 degrees F (7-30 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1/2 inch, 12.7 mm",
          "row_spacing": "18 inches",
          "days_to_germ": "7 to 12 days",
          "soil_ph": "6.0 to 7.5",
          "growing_soil_temp": "40 to 70 degrees F (16 to 21 degrees C)",
          "time_to_harvest": "30 weeks",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "cabbage worms",
            "root maggots"
          ],
          "diseases": [
            "downy mildew",
            "head rot"
          ]
        }),
        knex('plants').insert({
          "name": "Leeks",
          "img": "http://www.growinganything.com/image-files/growing-leeks.jpg",
          "description": "Growing leeks is a breeze in healthy, well-drained soil and full sun. As long as they’re well-mulched, they’ll also survive in the ground throughout winter, providing for a welcomed late harvest. If you live in a cold climate, you can plant leeks in containers or seed flats about 8 weeks before your last frost.  If you live in a warmer climate you can start leeks indoors about three weeks before your last frost date.And if you’re not up for seed starting indoors, purchase a started plant or plant the seed directly into the soil when the soil temperature reaches 75 degrees F (24 C).If you direct seed, plant your leeks in beds closely together but with enough room so that their leaves can branch out – 6 inches (15 cm) apart should be plenty. During your leek plants’ early stages, keep the soil well-watered and apply a liquid organic garden fertilizer every couple of weeks.Before transplanting your leeks (either from a started plant that you bought or from one you started indoors), wait until temperatures stay above 40 degrees F (4.44 degrees C) outside.  Harden seedlings off by reducing the water and temperature for about 7 days before planting them in your garden. Leeks’ shallow roots require frequent watering.  Give them enough to keep their stems moist and add a healthy layer of organic mulch to prevent weed competition and soil moisture loss.When you harvest your leeks depends on the variety you grow.  Some can be harvested about 10 weeks after planting in the late summer while others should wait until late fall. When they're ready, dig up as much as you need and leave the rest in the ground until you’re ready for more.  If you plan to wait until after the frosts begin, protect your leeks from the cold with a thick layer of mulch.If your plant is to store them for use throughout the winter, why not just leave them in the ground?  As long as you apply a thick layer of mulch (or plastic mulch) before the first hard frost, you can dig them up as needed.For short-term storage, put them in a plastic sealable bag prior to washing or trimming and slide them into your refrigerator’s vegetable drawer. They’ll last for a couple of weeks if stored in this fashion.Leeks don’t freeze well, so for longer storage pack them in a wooden box interspersed with moist soil from their garden bed and store in a cool, dry place.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "hardy -will survive full frosts",
          "soil_germ_temp": "70-75 degrees F (21-24 degrees C)",
          "life_cycle": "perennial",
          "planting_depth": "1/4 inches/ 6 mm",
          "row_spacing": "6 inches",
          "days_to_germ": "7-14 days",
          "soil_ph": "6.0-7.5",
          "growing_soil_temp": "60-75 degrees F (16-24 degrees C)",
          "time_to_harvest": "10-15 weeks",
          "seed_longevity": "2 years",
          "pest": [
            "grasshoppers",
            "cutworm",
            "thrips"
          ],
          "diseases": [
            "basal rot",
            "black mold",
            "pink root"
          ]
        }),
        knex('plants').insert({
          "name": "Lettuce",
          "img": "http://www.growinganything.com/image-files/growing-lettuce.jpg",
          "description": "Growing lettuce will open up literally hundreds of edible leaf options. Most lettuce thrives in cooler weather, so this is one of the crops you can plant early in the year. And many types of lettuce will continue to produce for months, as long as you keep harvesting.  In fertile soil, lettuce is easy to grow from seed.  It tolerates cooler temperatures (and even light frost), so it can be planted early in the season.  There are so many different types of lettuce that the biggest problem is often deciding which to plant! This plant transplants well, so in colder climates you may want to start indoors and transplant as the average temperature indicates early spring. To ensure that the top layer of your soil is fertile enough for this hungry plant’s shallow roots, churn a healthy amount of compost into the lettuce beds before planting.Leaf lettuces are best grown in the early season because they like cool weather, while head lettuce can tolerate more heat. Be sure to give the plants plenty of room - “head” varieties of lettuce require more room than “leaf” varieties (see spacing guidelines in snapshot box below). Regardless of whether you start them indoors or out and what variety you choose, make sure the seeds receive a lot of light until they germinate. Only cover them with a small amount of soil (about 0.2 inches/0.5 cm), then keep the well-drained bed moist at all times.  Lettuce likes full sun and will grow in a wide variety of soil types as long as you have good drainage. However, if the temperature gets too warm (soil climbs above 75 F/24 C), your plants may become temporarily dormant.  Therefore, in warmer climates try to give your lettuce plants partial shade during the day.Because lettuce has shallow roots, it needs to be watered regularly.It also needs plenty of aeration to prevent disease, so - as mentioned above - don't plant them too close together and be sure to thin seedlings. Watering in the morning is also a good way to help prevent disease.Looseleaf lettuce varieties can be harvested at virtually any phase, and removing only the outer leaves (instead of pulling up the entire plant or cutting off the plant just above the soil, which are also options) will encourage the plant to continue to grow. Harvesting leaves regularly will also encourage production. Head varieties should be harvested when the central leaves are fairly firm.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "half hardy- will survive light frosts",
          "soil_germ_temp": "40 to 60 degrees F (15 to 29 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": ".2 inches/ .5 cm",
          "row_spacing": "6-12 inches",
          "days_to_germ": "6 to 12 days",
          "soil_ph": "6.0 to 7.0",
          "growing_soil_temp": "40 to 75 degrees F (16 to 21 degrees C)",
          "time_to_harvest": "55-95 days",
          "seed_longevity": "1 years",
          "pest": [
            "aphids",
            "cutworm",
            "whiteflies"
          ],
          "diseases": [
            "dampling off",
            "mildew",
            "virus diseases"
          ]
        }),
        knex('plants').insert({
          "name": "Lima Beans",
          "img": "http://www.growinganything.com/image-files/growing-lima-beans.jpg",
          "description": "If you are interested in growing lima beans, you aren’t alone, for this is a very popular vegetable for planting in home gardens, especially in warmer climates. A native of Central America, the lima bean enjoys full sun and flourishes in areas with warm summers. In these conditions, lima beans are very easy to grow and require average soil with good drainage. Rich soil can cause this plant to have excessive foliage and fewer beans. Learning how to grow lima beans is simple. In fact, lima beans sprout and flourish so easily that they are frequently used in schools to teach children about plants. You can plant lima beans at three to four week intervals to provide several harvests throughout the growing season. Seeds are planted one inch deep, four to six inches (10 to 15 cm) apart and in rows of thirty to thirty-two inches (76 to 81 cm) apart after all danger of frost has passed. Lima beans prefer a dry soil, so take care not to overwater them. Once planted, watch lima beans closely for signs of growth as the plants must be thinned to stand four to six inches apart. If you have planted lima beans of the pole variety, then you will need to provide a series of poles for the bean vines to grow upon. Bush lima beans need no support. While the bean pods and blossoms are developing, the plants will need approximately an inch of water per week. While you shouldn’t overwater them, also be careful not to underwater them while they are blossoming. Lima beans must have sufficient water while blossoming or they may drop their flowers prematurely, affecting harvest yields. The more you harvest lima beans from your plants, the higher your yield will be. You’ll know that lima beans are ready when the pods are a bright green color and have filled out to be nice and plump. The end of the lima bean pod should feel a little spongy. Lima beans with yellow pods have been on the vine for too long, though they are still edible. Young lima beans are very tender, while more mature beans have a meaty texture. Pick lima beans by hand. Lima beans should be shelled for refrigerator storage. Use perforated plastic vegetable bags, and store shelled beans for no longer than one week. Frozen lima beans can last over a year. To freeze them, wash and sort according to size, then blanch small limas for two minutes, medium limas for three minutes, and large limas for four minutes. Cool and drain, then package as desired and freeze. Lima bean seeds are viable for three years.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season - will not survive frosts",
          "soil_germ_temp": "65 to 75 degrees F (18-24 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "1 inch or 3 cm",
          "row_spacing": "30-32 inches",
          "days_to_germ": "2-4 days",
          "soil_ph": "6.5 to 7.5",
          "growing_soil_temp": "65 to 75 degrees F (18 to 24 degrees C)",
          "time_to_harvest": "12-16 weeks",
          "seed_longevity": "3 years",
          "pest": [
            "aphids",
            "cutworm",
            "thrips"
          ],
          "diseases": [
            "bean rust",
            "root rot",
            "white mold"
          ]
        }),
        knex('plants').insert({
          "name": "Okra",
          "img": "http://www.growinganything.com/image-files/growing-okra.jpg",
          "description": "Growing okra is a good gardening project for the beginning warm-climate gardener. This Africa native and relative of the hibiscus (making Okra a highly ornamental as well as edible plant) is a staple in Southern and Cajun dishes. As long as it gets full sun, plenty of warmth and fertile soil, it will produce throughout the season if harvested regularly. Okra is easy to grow from seed if it has high enough soil temperatures.  The soil should be at least 80 degrees F/27 C for germination.  If your soil isn’t warm enough, use black plastic mulch for a few weeks before planting. You can sow okra directly into the ground after danger of frost, or start early indoors. Sow directly or transplant when the air temperature is consistently above 60 degrees F (16 C). Before planting, nick the okra seed with a file or soak it in water overnight to make it easier for the seedling to emerge.  Always thin seedlings to about 18 inches apart.  Okra requires plenty of sun and water, so use mulch to help keep the soil from drying out. Stake the plants if necessary and remove fast-growing shoots to keep the plant bushy. Okra grows very quickly once the weather warms. Fertilize with a natural fertilizer about once per month.  You may not have to fertilize as much if you've planted in a spot that grew a high-nitrogen crop such as beans or peas last year.  Okra should be harvested when young... the pods should be about as long as your finger. If pods are left on the vines too long, they become stringy.Cut the pods with a sharp knife or clippers and handle them gently, as they bruise easily. Be sure to harvest regularly so that production doesn't stop. Okra can be stored in the warmest part of the refrigerator in perforated plastic bags for about a week.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season - will not survive frosts",
          "soil_germ_temp": "70-95 degrees F (15 to 29 degrees C)",
          "life_cycle": "Annual",
          "planting_depth": "0.4 inches for seed or 1 cm",
          "row_spacing": "18 inches",
          "days_to_germ": "7-15 days",
          "soil_ph": "6.0-8.0",
          "growing_soil_temp": "70 to 95 degrees F (21-35 degrees C)",
          "time_to_harvest": "55-60 days",
          "seed_longevity": "2 years",
          "pest": [
            "aphids",
            "stink bugs",
            "Japanese beetle"
          ],
          "diseases": [
            "blossom blight",
            "leaf spots",
            "wet rot"
          ]
        }),
        knex('plants').insert({
          "name": "Onions",
          "img": "http://www.growinganything.com/image-files/how-to-grow-onions.jpg",
          "description": "Learning how to grow onions is appropriate for home gardeners of all ages. They’re not difficult to grow and require little attention once planted, but they can try the patience of young gardeners because all the action seems to be taking place under the soil! While they’ll probably grow without it, onions prefer full sun and moist soil with good drainage. Onions grown from seed take longer to mature and harvest than do onions grown from sets. Start onion seeds indoors about eight weeks before the last frost date. Sow seeds directly into flats, cover with plastic for a greenhouse effect and keep the soil continually moist. A heat mat for seedlings can help to speed up the germination rate. Make sure the seeds and seedlings get plenty of even moisture – especially for the first few weeks. Onion “sets” are tiny onion bulbs and are used by gardeners who want to get a head start on growing onions. Both onion seeds and onion sets may be planted outdoors as soon as weather permits and when the soil is at the proper temperature - usually around the month of March. When planting onion sets, the pointed top should face up and be even with the soil’s surface. Harden off onion plants before planting outside by gradually exposing them to outdoor weather over the course of a week. Once seeds have germinated, place flats in a sunny window or beneath a grow light. You should thin onion seedlings to stand about two inches apart, and when they have reached a height of about five inches, cut them back to three inches to prevent leggy plants. Transplant onion plants into your garden about four weeks before the last frost. Keep garden weeds to a minimum either by pulling by hand or hoeing them very carefully from the onion bed. Onions are easily damaged, so don’t be too aggressive with your tools. Give onions about an inch of water weekly, and make sure to allow the bed to dry out in between watering (this does NOT apply during the first few weeks after planting when onions need continual moisture). Well-composted soil shouldn’t require much fertilization, but use organic fertilizer for vegetables monthly if your soil's fertility is less than ideal. Onions may be harvested at any time, as they are edible at any stage of growth. However, if you want large onions, it is best to put off harvesting until the end of their growing season. A clue to when onions have stopped growing is the appearance of the onion plant's tops. When the tops lose color and fall over, the onions should be left in the ground for another ten days. Choose a sunny day to pull onions from the ground, and try to let them dry in the sun for up to a week so that the root system at the base of each onion will die. Onions will then need to have their tops removed before they are ready to cure in a warm, well-ventilated area. Leave them there for two to three weeks so that they will be dry enough to store for an extended period. First, some onions store better than others. If you are growing onions for storage, choose varieties that store well. Once cured, onions should be stored in mesh bags in a dry, cool, well-ventilated area. To prepare onions for freezing, peel and chop them or cut them into rings. Wrap onions in several layers of plastic wrap, then place them into a plastic freezer container for up to three months. Onion seeds are viable for one year.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "hardy -will survive full frosts",
          "soil_germ_temp": "70-75 degrees F (21-24 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "for transplants and seeds about 1/2 inch",
          "row_spacing": "3 inches",
          "days_to_germ": "5-10 days",
          "soil_ph": "6.0-7.0",
          "growing_soil_temp": "50-95 degrees F (10-35 degrees C)",
          "time_to_harvest": "20 weeks",
          "seed_longevity": "1 years",
          "pest": [
            "grasshoppers",
            "cutworm",
            "thrips"
          ],
          "diseases": [
            "basal rot",
            "blue mold rot",
            "pink root"
          ]
        }),
        knex('plants').insert({
          "name": "Parsnips",
          "img": "http://www.growinganything.com/image-files/growing-parsnips.jpg",
          "description": "Growing parsnips is a great way to have delicious veggies in early spring when the rest of your vegetables are just going in the ground. They’re also good for a late fall harvest well after the rest of your crops are out of the ground… Parsnips prefer deep fertile soil that gives their 12 to 24 inch (30 to 61 cm) roots room to grow. If you do plant parsnip in poor soil, you'll know it by the light green stems and stunted growth. Also be sure that you’re planting a fresh seed that’s less than one year old. Before planting in mid- to late-spring, churn some compost into soil that receives both sunshine and shade. They’ll be happy as long as they receive about half of the day’s sun. Plant the seed about ½ inch down (12.5 mm) then lightly cover with compost and gently water. Parsnip germination rates are relatively low partially due to their seedlings’ difficulty breaking through the soil. Keeping the soil adequately moist and the soil temperature at around 60 to 65 degrees F (15-18 degrees C) will greatly increase the rate of germination. Water your parsnips regularly after planting and apply an organic garden fertilizer for vegetables in early summer to promote growth. To prevent forked and hairy roots, avoid fertilizers high in nitrogen. Apply a thin layer of mulch to keep the weeds at bay and moisture in during the summer and fall. If you plan to harvest in early spring, apply a thick layer of straw mulch to get your parsnips through the winter. Unlike most plants in your vegetable garden, parsnips actually taste better after multiple hard frosts because the cold weather turns the starch within the parsnips' roots into sugars. If you harvest in the fall, wait until there have been at least a couple of hard frosts. If you wait until spring, harvest your parsnip roots whenever you’d like after the last hard frost… just don’t wait until their leafy tops have sprouted too high unless you like blander-tasting parsnips. Come harvest time, use a spade to dig the roots out of the ground then wash and dry off the root bulbs. To store parsnip, wash the roots, trim the tops by ½ inch (1.27 cm), place them in perforated plastic bags and store in a cool place such as a refrigerator or root cellar. They’ll last between 2 and 4 months. You can also freeze parsnips by removing the tops and washing them. Leave small parsnips whole while cutting larger ones into thin slices or ¼ inch (0.63 cm) cubes. Water blanch small parsnips for 5 minutes; water blanch diced, sliced, and cubed parsnips for 2 minutes. Cool them promptly, drain the water, package, seal and freeze them. Don’t keep parsnip seeds any longer than one year.",
          "sun_amount": "partial shade",
          "weather_tolerance": "hardy -will survive full frosts",
          "soil_germ_temp": "50-70 degrees F (10-20 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1/2 inches/ 12 mm",
          "row_spacing": "3-4 inches",
          "days_to_germ": "10-28 days",
          "soil_ph": "5.5-7.5",
          "growing_soil_temp": "50-85 degrees F (10-30 degrees C)",
          "time_to_harvest": "20 weeks",
          "seed_longevity": "1 years",
          "pest": [
            "celery leaf flies",
            "cutworm",
            "wireworms"
          ],
          "diseases": [
            "canker"
          ]
        }),
        knex('plants').insert({
          "name": "Peanuts",
          "img": "http://www.growinganything.com/image-files/growing-peanuts.jpg",
          "description": "If you love them as much as we do, growing peanuts in warmer climates is a straightforward process that should be added to your garden plan.  Unfortunately, those in cooler climates may have a tougher time. To grow best, peanuts need full sun, and sandy, loamy and well-drained soil that has been enriched with organic matter.Peanuts must be planted after all danger of frost has passed and must grow and develop under the ground in a sandy, loamy and well-drained soil for around 140 days. Make sure your weather will cooperate and that you have the required soil type before planting peanut seed. They also prefer soil rich in calcium which can be added to your garden by applying gypsum. To plant peanuts, sow the seeds three to five inches (8 to 13 cm) deep and seven inches (18 cm) apart. Water the planting area well. Do not water your peanut garden again until the seeds begin to sprout. After a while, you will see flowers begin to develop along with the peanut pods.  Soon thereafter, the flowers’ pedals will fall off and the stem and peanut pods will bend over and bury themselves in the soil.Keep the soil moist throughout the peanut plant’s growing cycle, but do not give peanuts too much water. Keep garden weeds at bay to prevent them from affecting the growth of the plants.You will know it’s time to harvest peanuts when the foliage of the plant begins to turn yellow. When it does, you can dig up several peanuts to find out if they are ripe (they should have dry skin and feel firm to the touch).If the peanuts are not ready but look like they’re getting close, continue to check the plant and test the nuts every few days. It takes up to 140 days from the time the plant sprouts until peanuts are ready to harvest, but start checking about 120 days in.When they’re ready, remove the peanut plants from the ground, brush off the excess soil and cure in the sun for a few days.  Once they’ve dried up a bid, remove the peanuts and continue to cure them in the sun (don’t leave them out in the rain) for a few weeks until fully dry.Peanuts may be stored in a place that is dry and cool for up to two months. Many people keep freshly harvested peanuts in their refrigerator, but experience has taught us that the humidity in that environment can play havoc with the condition of the peanut.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not survive frost",
          "soil_germ_temp": "70-75 degrees F (21-24 degrees C)",
          "life_cycle": " both perennial and annual",
          "planting_depth": "3-5 inches/7.6 to 12.7 cm",
          "row_spacing": "7 inches",
          "days_to_germ": "10-14 days",
          "soil_ph": "5.5-7.0",
          "growing_soil_temp": "65-85 degrees F (18-29 degrees C)",
          "time_to_harvest": "120-140 days",
          "seed_longevity": "3 years",
          "pest": [
            "beet armyworm",
            "cowpea aphid",
            "tobacco mite"
          ],
          "diseases": [
            "pod rot and other types of rot",
            "leaf spot",
            "rust and blight"
          ]
        }),
        knex('plants').insert({
        	"name": "Peas",
        	"img": "http://www.growinganything.com/image-files/growing-peas.jpg",
        	"description": "Growing peas is an great way to get an early harvest since they are one of the earliest spring plants to produce. There are several different varieties of peas, including English peas, snow peas, and snap peas. Peas are easy to grow as long as you give them full sun and fertile soil. Smooth seeded peas produce a starchy pea, while wrinkled seeds produce a sweeter pea. Either can be grown from seed sown directly into the garden before the last frost date, but keep in mind that the warmer your soil, the quicker they’ ll germinate. Apply organic garden fertilizer after your seeds are sown. Vining varieties, which give a larger yield than bush varieties, will need to be staked for support. They should also be sown further apart than bush varieties. If you want an early crop of peas, you can also start the seeds indoors well before the last frost and then transplant the seedlings into the garden as the weather warms up. Pea seedlings often need to be protected from birds, which are happy to eat the seeds while the seeds are young. Pea plants can be tricky to water since they cannot tolerate being soggy, but if the soil dries out, it will affect production. Step up the watering when the plants begin to flower, and mulch to conserve moisture as the weather warms. Both watering and harvesting are easier when pea plants are grown up some type of support, so plan accordingly. Peas make their own nitrogen, so avoid fertilizing with high-nitrogen fertilizers. But do apply some organic fertilizer for vegetables when the plants have grown to a few inches(about 8 cm). Peas’ harvest time depends on the variety, but in general, peas left on the vine longer will have a thicker texture, while peas picked earlier will be more tender.Shelled peas and snow peas should be harvested when the peas can first be felt through the pod(don’t let them grow too large). For tender and sweet sugar snap varieties, harvest when the pod“ snaps” when broken. Harvest regularly to increase production. Peas can be kept in perforated bags in the refrigerator for about a week. They can also be canned or frozen. To freeze shelling peas, shell and wash the peas, and then blanch for about 1½ minutes. To freeze pod peas, remove stems and wash the pods. Blanch whole pods for about 2 to 3 minutes. For both types, allow them to cool after blanching, then package, seal and freeze them.",
        	"sun_amount": "Full sun at least 6 hours",
        	"weather_tolerance": "hardy -will survive full frosts",
        	"soil_germ_temp": "40-75 degrees F (5-24 degrees C)",
        	"life_cycle": "annual",
        	"planting_depth": "1.2 inches/ 3 cm",
        	"row_spacing": "2 inches",
        	"days_to_germ": "7-14 days",
        	"soil_ph": "6.0-7.5",
        	"growing_soil_temp": "60-75 degrees F (16-24 degrees C)",
        	"time_to_harvest": "60-70 days",
        	"seed_longevity": "3 years",
        	"pest": [
        		"aphids",
        		"pea moth",
        		"thrips"
        	],
        	"diseases": [
        		"basal stem rot",
        		"powdery mildew",
        		"viruses"
        	]
        }),
        knex('plants').insert({
          "name": "Bell Peppers",
          "img": "http://www.growinganything.com/image-files/growing-bell-peppers.jpg",
          "description": "Growing bell peppers is a great way to add flavor and variety to your garden and nutrients your diet. They come in a wide range of colors and each has a wonderful, unique flavor. With full sun and fertile soil, they’re easy to grow as long as you keep the temperature right.  They’re also simple to store, meaning those nutrients and delicious flavors can stay with you year-round. During your garden preparations, keep two things in mind for your peppers: Don’t rotate them with any plant from the Nightshade family (tomatoes, eggplant, potatoes) and choose a spot that will get plenty of sun – to be all that they can be, peppers need plenty of sunshine and warmthBell peppers can be grown from seed, but it can take 10 to 12 weeks to grow to the point that it's ready to transplant into the garden.  In addition, they need to stay very warm – at least 80 degrees F (27 C) – until they germinate, so you’ll probably need a heat mat or grow light.Your other option is to purchase a transplant from your local nursery.  The major downside here is that you’ll be limited to the varieties that they carry.  If you go this route, pick plants without any peppers already growing on them.Also keep in mind that peppers do very well when grown in pots or other containers, so even if you have only a deck or patio, you can grow them.  Containers will also make your life easier when it comes to avoiding their Nightshade family cousins.  As with the planting and germination stages, maturing bell peppers like it to stay warm while they grow.  If you live in a cooler climate, use plastic mulch to make sure the soil stays above 60 degrees F (15.5 C) and row covers if the air temperature is going to drop below 55 degrees F (13 C).Bell peppers also need fertile soil, but they’re sensitive to too much nitrogen. When you set the plants into the ground, they will benefit from fertilizing with a starter solution, but otherwise, do not fertilize too much.  Over-fertilizing can cause blossoms and small pepper pods to fall off the plant.Plants need to be kept evenly moist, but not soggy and may need to be staked.When you harvest your bell peppers is up to you.  For maximum sweetness, wait until they turn their “final” color.  For maximum yield, pick them when they’re green. Either way, the fruits should be swollen and glossy. Bell peppers can be stored in the warmest part of the refrigerator for about two weeks in a plastic bag.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not tolerate frosts",
          "soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "0.1 inch/.25 cm",
          "row_spacing": "5 inches",
          "days_to_germ": "14-21 days",
          "soil_ph": "5.5-7.0",
          "growing_soil_temp": "65-95 degrees F (18-35 degrees C)",
          "time_to_harvest": "45-85 days",
          "seed_longevity": "2 years",
          "pest": [
            "aphids",
            "cucumber beetles",
            "spider mites"
          ],
          "diseases": [
            "curly top",
            "spotted wilt virus",
            "mildew"
          ]
        }),
        knex('plants').insert({
        	"name": "Hot Peppers",
        	"img": "http://www.growinganything.com/image-files/growing-hot-peppers.jpg",
        	"description": "Add a little spice to your life by growing hot peppers in your home garden. Regardless of how much heat you want, there's a pepper for you. And it's fun to experiment with this easy-to-grow plant by growing several different types! Hot peppers can be grown from seed, but it can take 10 to 12 weeks to grow to the point that the plant is ready to transplant into the garden. The seeds also need a lot of heat until they germinate. Ideally, the soil should be at least 80 degrees F (27 C) until germination. You may need a heat mat or grow light to accomplish this.You can also find transplants at the nursery, but you won't be able to get as much variety as when you grow them from seed.If you choose transplants, do not choose those that already contain some tiny peppers, as they will not bear as well. Peppers do very well when grown in pots, so you'll be able to grow them even if you have only a deck or patio.Do not rotate your hot peppers with any plant from the Nightshade family (tomatoes, eggplant, potatoes), and select a garden spot or container that will get plenty of sun. Hot peppers need fertile and relatively warm soil and are sensitive to too much nitrogen. If necessary, use plastic mulch to ensure that the soil remains above 60 degrees F (15.5 C) and use row covers if the air temperature is predicted to fall below 55 degrees F (13 C).When you set the plants into the ground, they will benefit from fertilizing with a starter solution. After this, do not fertilize too much, as it can cause blossoms and small pepper pods to fall off the plant.Peppers are subject to \"transplant shock\", so it's best to transplant them in the evening. Plants need to be kept evenly moist but not soggy and may need to be staked, particularly if there is a lot of wind. You can harvest hot peppers whenever their size and color suits you. The longer you wait, the sweeter and hotter they will taste. But fruits picked earlier will result in a higher yield. Regardless, wait to harvest at least until the fruits are swollen and glossy. Hot peppers should be stored in a plastic bag placed in the warmest part of the refrigerator for about two weeks.",
        	"sun_amount": "Full sun at least 6 hours",
        	"weather_tolerance": "warm season- will not tolerate frosts",
        	"soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
        	"life_cycle": "annual",
        	"planting_depth": "0.1 inch/.25 cm",
        	"row_spacing": "5 inches",
        	"days_to_germ": "14-21 days",
        	"soil_ph": "5.5-7.0",
        	"growing_soil_temp": "65-95 degrees F (18-35 degrees C)",
        	"time_to_harvest": "45-85 days",
        	"seed_longevity": "2 years",
        	"pest": [
        		"armyworm",
        		"corn earworms",
        		"whiteflies"
        	],
        	"diseases": [
        		"curly top",
        		"crown rot",
        		"powdery mildew"
        	]
        }),
        knex('plants').insert({
          "name": "Potatoes",
          "img": "http://www.growinganything.com/image-files/how-to-grow-potatoes.jpg",
          "description": "Learning how to grow potatoes successfully requires loose, rich soil that drains well along with full sun. They prefer cool weather, so if you live in an area that has hot summers, you'll want to make sure that you get your potatoes into the ground early. The time of year you plant potatoes depends on your climate. They need a soil temperature of at least 45 degrees F (7 C), which roughly translates to late winter for moderate climates and mid-spring in colder climates. Those in warmer climates can get away with planting them in the fall and will have a much earlier harvest. Small pieces of potato are used as seeds when growing potatoes. A two-ounce (60 g) seed with at least one eye is considered sufficient for planting. Cut seed potatoes a couple of days before you plan to plant them so they have a chance to dry. Seed pieces should be placed ten to twelve inches (25.4 to 30.5 cm) apart and covered with about three to four inches (7.5 to 10 cm) of soil. It is also possible to grow potatoes in straw mulch by covering seeds with an inch (2.5 cm) of soil and placing four or five inches (10 to 13 cm) of straw around the plants. Keep potato vines well-watered during their growing period. They will need one to two inches (2.5 to 5 cm) of water each week. To help conserve moisture and prevent sunlight from reaching the potato, apply a layer of compost topped with a layer of straw after the vines have appeared. The compost/straw layer should cover at least half the plant. If you don’t have straw handy, create a hill of well-composted soil around the plant, leaving only a few inches of the plant showing. Any garden weeds that appear may be carefully pulled by hand so you don't disturb the plant’s growth. Potatoes are harvested once the vines have withered and died. You will need a shovel to gently dig four to six inches below the soil to harvest your potatoes. If potatoes were grown in straw mulch, simply lift the straw to harvest them. Early or new potatoes are harvested about 60 days after planting, and the fully mature potatoes will be ready between 90 and 120 days after planting. Potatoes need to cure for two to three days, and this is done by leaving them on the ground in the garden if the weather permits. After the soil on them has dried, brush them off and cure them outside for another couple of weeks. Store potatoes after curing in perforated plastic bags. Choose a cool area with high humidity. Do not store potatoes in the refrigerator as the starch will convert to sugar. Cooked potatoes may be frozen in various ways, but freezing raw potatoes is not a good idea as they can become mushy. However, this texture will not be noticed when the potatoes are used in some recipes. To freeze raw potatoes, peel, water blanch for five minutes, cool, drain, and pack in freezer bags. Potatoes are viable as seed for about one year.",
          "sun_amount": "not noted",
          "weather_tolerance": "half hardy- will tolerate light frosts",
          "soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "3-4 inches/ 7.5-10 cm",
          "row_spacing": "10-12 inches",
          "days_to_germ": "14 days",
          "soil_ph": "4.5-6.0",
          "growing_soil_temp": "65-75 degrees F (18-24 degrees C)",
          "time_to_harvest": "60 days",
          "seed_longevity": "1 years",
          "pest": [
            "aphids",
            "Jerusalem cricket",
            "potato beetle"
          ],
          "diseases": [
            "ring rot",
            "early blight",
            "seed piece decay"
          ]
        }),
        knex('plants').insert({
          "name": "Pumpkins",
          "img": "http://www.growinganything.com/image-files/growing-pumpkins.jpg",
          "description": "Growing pumpkins is relatively easy as long as they have plenty of light, very rich soil and lots of water. With a little luck and the following pumpkin growing tips, you’ll have plenty of pumpkins for Halloween jack-o-lanterns and that favorite fall treat, pumpkin pie. They also make great soups and tasty toasted seeds.You can start pumpkins indoors from seed or purchase pumpkin seedlings at your local nursery or garden center. They are a summer squash and therefore require long, warm days for ideal growth, so don’t plant outside until after the last frost has passed.Pumpkins need a large site that receives full sun and has light, rich soil with good drainage. Pumpkin roots and vines can grow and spread up to 15 feet, so plan accordingly. Allow around five feet between plants for growing room. Pumpkins’ size also requires a lot of nutrients, so be sure to use plenty of compost in their garden spot. Once your pumpkin seedlings are in the ground, you will want to water them deeply whenever the soil gets dry. But do not get water on the pumpkin leaves as this can cause fungal diseases.Mulch will help the soil to retain water. Keep garden weeds at bay by hoeing the pumpkin patch as needed. Pumpkins that are ready to harvest will have a uniform, deep color and a hard rind. Harvest before hard frost by cutting the fruit from the vine, leaving about 3 to 4 inches of stem.For improved keeping quality, pumpkins are best cured in a sunny setting of about 80 to 85 degrees (27 to 29 C) and a relative humidity of 80 to 85% for about 10 days. For dry storage, after washing with soapy water and drying, cured pumpkins should be stored on wooden pallets or shelves in a cool, dry place. Arrange pumpkins in single layers so that air may freely circulate around them. Pumpkins should not be stored on a concrete floor, nor should you keep them near apples, pears, or any other fruit that is ripening.For freezing up to three months, choose pumpkins with good color, remove seeds, and cut into cooking-size sections. Cook pumpkin until it is soft, using your choice of methods, which could include boiling, steaming, baking, pressure cooking or microwaving. Cool, remove pumpkin meat from rind, mash, package and freeze.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "half hardy- will tolerate light frosts",
          "soil_germ_temp": "70-90 degrees F (21-32 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "0.1 inch/.25 cm",
          "row_spacing": "18-24 inches",
          "days_to_germ": "5-10 days",
          "soil_ph": "5.5-7.0",
          "growing_soil_temp": "65-80 degrees F (18-27 degrees C)",
          "time_to_harvest": "14-20 weeks",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "cutworms",
            "spider mites"
          ],
          "diseases": [
            "curly top",
            "damping off",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Radishes",
          "img": "http://www.growinganything.com/image-files/growing-radishes.jpg",
          "description": "Growing radishes is the perfect choice for a child’s first garden. They are very easy to grow and develop in just a few weeks. Once you know how to grow radishes, you’ll want to keep a bed of them in rotation all year round as weather permits in order to enjoy their crisp, spicy goodness. Radishes come in both spring and winter varieties, and do best in cool weather. When to plant radish seed depends on whether you're planting for a spring, summer, or winter harvest, but the timing is generally April through September, two to three weeks before the first and last frosts. Plant radish seeds one half inch deep (13 mm) and one inch (2.54 cm) apart in rows that are ten to sixteen inches (25 to 41 cm) apart, adding an organic garden fertilizer after planting. Radishes aren’t too fussy about their growing conditions, but well drained rich soil and partial shade to full sun will ensure a bumper radish crop. However, radishes only like a lot of sunshine during cool weather. If your radishes are a summer crop, they may be planted alongside other vegetables such as beans and peas whose growth will provide them with some shade.Once radish seed have begun to sprout, you'll want to thin them until you have one plant left every two inches along the row. Keep the radish bed well-mulched to help keep the soil cool and moist as high temperatures and lack of moisture can change their taste and texture. Radishes are quick to reach a usable size, and they are as easy to pick as they are to grow. Pull the radishes when they are about one inch in diameter, as at this size they are still young and tender.Keep a close watch on radishes reaching harvest age, as they can change from crisp and tender to spongy and foul-tasting in a matter of days. To store radishes, wash the roots and trim off both the taproot and the green leafy tops, then place cleaned, trimmed radishes in plastic bags in the refrigerator where they will keep for up to a month.For freezing, choose well-formed radishes with no black spots. Do not peel, but cut into smaller pieces and blanch in boiling water for two to three minutes. Plunge into cold water, then drain, place in bags or containers, and place in freezer. Be aware that radishes that have been frozen will have a different texture from fresh radishes.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "half hardy will tolerate light frosts",
          "soil_germ_temp": "45-90 degrees F (7-32 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1/2 inch/ 3 cm",
          "row_spacing": "1 inches",
          "days_to_germ": "4-7 days",
          "soil_ph": "6.0-7.0",
          "growing_soil_temp": "45-90 degrees F (7-32 degrees C)",
          "time_to_harvest": "3-6 weeks in the summer long in shoulder seasons",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "flea beetles"
          ],
          "diseases": [
            "black root",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Rhubarb",
          "img": "http://www.growinganything.com/image-files/growing-rhubarb.jpg",
          "description": "Growing rhubarb from seed requires patience, as it is not ready for harvest until the second or third year after its initial planting. The quicker way to go is to plant pre-grown root divisions.  Either way, with care and fertile, well-drained soil, rhubarb can produce for up to fifteen years. Rhubarb seed exists, but it takes a long time to grow plants from seed and the seedlings are not always true to size and color. However, there are some types of rhubarb seeds that are labeled “easy to grow” that you may want to give a shot. To plant rhubarb seeds, soak in water for several hours, and then plant in a good soil mixture, two seeds per pot. The easier growing method is to plant root divisions (part of the root of a mature rhubarb plant) a few weeks before the first frost.Once rhubarb seeds have been planted, you can expect quick germination.Prepare the soil bed for rhubarb carefully, as this will be the plant’s home for ten years or more. Loosen the soil at least ten inches deep and add three to four inches of compost and a good handful of an organic garden fertilizer that is high in phosphorus and potassium. Be sure to keep your rhubarb plants’ soil moist. Mulch is a good idea, for it will help to smother garden weeds and retain moisture. As any flower shoots emerge, snip them off quickly so that moisture and nutrients aren’t wasted.Rhubarb is usually harvested once the roots of the plant have established themselves, about two to three years for crowns (root divisions) and three to four years from seeds. However, most gardeners can anticipate a light harvest of one or two stalks the first year. Cut the stalks of rhubarb at their base when the plant has reached about three feet (91 cm) in diameter and the stalks are around two feet (61 cm) tall and one half to one inch (1.3 to 2.5 cm) in diameter.Do not consume the leaves, as they contain oxalic acid and are poisonous. To store freshly harvested rhubarb, cut into desired lengths and store in perforated plastic vegetable bags in the crisper section of your refrigerator for up to three weeks.Rhubarb can also be frozen. To prepare for freezing, clean the stalks and cut them into one inch (2.5 cm) pieces and then water blanch for one minute. Cool, drain well, and place into freezer bags or containers, making sure to leave some headroom at the top of each.",
          "sun_amount": "Full sun to partial shade",
          "weather_tolerance": "hardy will tolerate frosts",
          "soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
          "life_cycle": "perennial",
          "planting_depth": "1 inch/ 3 cm",
          "row_spacing": "18-24 inches",
          "days_to_germ": "5-10 days",
          "soil_ph": "5.5-6.8",
          "growing_soil_temp": "45-75 degrees F (7-24 degrees C)",
          "time_to_harvest": "two to three years after planting",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "potato bugs",
            "slugs"
          ],
          "diseases": [
            "cherry leaf roll virus",
            "fungus",
            "root and crown rot"
          ]
        }),
        knex('plants').insert({
          "name": "Shallots",
          "img": "http://www.growinganything.com/image-files/growing-shallots.jpg",
          "description": "Growing shallots is an easy task for the home gardener, but it takes around 100 days to do so from seed. A gourmet favorite, shallots need rich, well-drained soil, plentiful moisture and full sun to partial shade in order to grow and flourish.  Shallots may be grown from seeds or from sets, which are small bulbs grown from seed the previous growing season. Assuming you have a 100+ day growing season, plant shallot seed in early spring as soon as the soil is ready for digging. Shallot seeds and sets may also be planted in the fall for a late spring/early summer harvest. For best results, plant in full sun and add organic matter to the soil before sowing seeds or sets. To avoid overcrowding, seeds should be spaced 2 to 3 inches (2.54 to 5.08 cm) apart, and individual cloves separated from sets should be planted about 6 inches (15 cm) apart. Water shallots thoroughly once they have been planted.Once shallots have been planted and have reached about 3 inches (8 cm), you should mulch around and between the plants. To keep soil temperature up, shallots planted in the fall should be mulched with black plastic. Remove garden weeds diligently by hand, and remove any flower stems that appear on the plants. Keep soil moist by watering weekly, especially in dry weather.Shallots are ready to be harvested when their leaves have started to turn brown and droopy. Harvest your shallots by lifting them from the soil, then leave them to dry for a few days in the shade if possible. In inclement weather, dry shallots indoors in single layers on a screen. Let shallots cure for seven to twenty-one days, then inspect them for softness and damage, discarding any bad specimens.For storage, separate shallots, trim roots and stems, place in mesh vegetable bags and hang in a dry, well-ventilated area. Do not store shallots in warm, humid areas or in locations where they may freeze.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not tolerate frosts",
          "soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
          "life_cycle": "perennial",
          "planting_depth": "1-2 inches/3-5 cm",
          "row_spacing": "2-3 inches",
          "days_to_germ": "11-14 days",
          "soil_ph": "6.0-7.0",
          "growing_soil_temp": "55-75 degrees F (13-24 degrees C)",
          "time_to_harvest": "90-100 days",
          "seed_longevity": "1 years",
          "pest": [
            "bulb mites",
            "grasshoppers",
            "onion maggots"
          ],
          "diseases": [
            " various rot",
            "purple blotch",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Soy Beans",
          "img": "http://www.growinganything.com/image-files/growing-soybeans.jpg",
          "description": "Growing soybeans is not that difficult for most gardeners as it’s a hearty, resilient plant.  They can be grown in partial shade, but full sunlight and even watering will ensure the highest yields.  Soybeans grow best in full sun and in loose, well-drained soil that is rich in organic matter, but they can also tolerate poor soil (hence their frequent use as a cover crop). It is best to plant the seeds when the soil temperature is between 55 and 60 degrees Fahrenheit (13 and 16 C) (but no sooner than the last frost date) as warmer temperatures lead to higher germination rates.  Higher germination rates will give the seeds a better chance of avoiding diseases.If you don’t want to take your soil’s temperature, having consistent daytime air temperatures in the 70’s (21.7 degrees Celsius) is generally a good time to plant. Keep the seeds consistently watered until the seedlings sprout.Water your soybeans at their base throughout their growth to prevent disease and plant damage. Add organic mulch when soil temperatures increase above 65 degrees F (18 C) to retain moisture and smother out garden weed growth, and introduce a couple inches of compost about half way through their growing season.If you plant to shell and use your soybeans fresh, you can harvest them about 50 to 60 days after planting. Dry soybeans, on the other hand, require at least three months in the ground. For dry soybeans, pull the entire plant out of the ground and hang it upside-down to dry.  You can shell beans as soon as the pods are completely dry.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not tolerate frosts",
          "soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1 inch/ 25 mm",
          "row_spacing": "2-4 inches",
          "days_to_germ": "100 days",
          "soil_ph": "6.0-6.8",
          "growing_soil_temp": "60*70 degrees F (15-21 degrees C)",
          "time_to_harvest": "7-9 weeks",
          "seed_longevity": "2-3 years",
          "pest": [
            "aphids",
            "cucumber beetles",
            "spider mites"
          ],
          "diseases": [
            "curly top",
            "root rot",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Spinach",
          "img": "http://www.growinganything.com/image-files/growing-spinach.jpg",
          "description": "Growing spinach can be relatively easy in climates that are cool.  Ideally, this plant likes full sun and light, nutrient-rich soil that retains moisture well. If grown in warmer temperatures, spinach will require partial shade.   Regardless of your growing conditions, this resilient plant should be a part of your garden… if grown anywhere close to its ideal conditions, it’ll put its canned store-bought counterpart to shame. You can start plants from seed or buy spinach plants at a local nursery to speed up your harvest…Spinach first grew in the Middle East countries, possibly Persia, also known as Iran. At some point between the years 800 AD to 1200 AD, the Moors brought Spinach to Spain. People started growing spinach in the United States sometime around 1806. Today, spinach is grown in many parts of the world that have cool temperatures for at least part of the year.Spinach does not fare well in hot weather, as it tends. Cool, sunny weather and cool, well drained soil make the spinach plant very happy. This means that it is best to plan to plant spinach six weeks before the last average frost of the spring for a spring crop, and at around six to seven weeks before the first date frost is expected in the fall. You can start spinach seeds indoors for a spring crop. This way, they can have some size to them before you place them in the ground once the threat of frost has passed. Spinach seed germinates faster if it is soaked for 24 hours before you plant it. Finally, there are many varieties of spinach to choose from. The main difference is in their leaves… some types of spinach can handle colder temperatures than others.Spinach is a good plant for a beginner to grow when you know the weather is going to cooperate.  It is also excellent for a child’s garden. The quick germination time of spinach is pleasing to little gardeners who are eager to see their first crop peek out of the ground. If you would like to have fresh spinach continuously throughout its growing season, you can plant spinach every ten days until around the middle of the spring or fall. You will need to thin spinach plants when they have developed two sets of leaves. Most people just trim the young spinach with scissors until it is around 4 to 6 inches apart. Don’t throw away the thinned spinach, for its young leaves are simply delicious in salads.After spinach has grown anywhere from 40 to 60 days, it is ready to be harvested. If the leaves look large enough for the salad or other dish you are preparing with them, then they are very pick-able! Just take care to pick spinach leaves from the outside of the plant. Leave the inside leaves to continue growing, for they can produce yet another crop for you.  If you prefer, it is fine to harvest the whole plant.It is best to use spinach as quickly as possible after harvesting. It stays crisper and tastes better when it is very fresh.If you want to keep fresh spinach for a few days after it is harvested, do not wash the spinach leaves you pick. Store them in a plastic bag that has been sealed loosely. Keeping the bag in the “crisper” section of your refrigerator helps keep them the freshest.Do not store fresh spinach in the refrigerator with apples, tomatoes, or melons. These fruits give off a natural gas that can wilt the leaves. For best results, wash and dry the spinach leaves just before use.Spinach may be frozen, which is handy when you have a good crop. Simply wash the leaves and pat dry. The quickest way to prepare spinach for the freezer is with a microwave. Place spinach into a freezer bag. Seal bag and microwave for one minute. Cool, then freeze. Use your frozen spinach within three to six months.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "hardy- will survive hard frosts",
          "soil_germ_temp": "70-75 degrees F (21-23 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "10 inches/ 25 cm",
          "row_spacing": "8 inches",
          "days_to_germ": "7-14 days",
          "soil_ph": "6.0-7.0",
          "growing_soil_temp": "55-65 degrees F (12-18 degrees C)",
          "time_to_harvest": "4-6weeks",
          "seed_longevity": "3 years",
          "pest": [
            "aphids",
            "flea beetles",
            "snails"
          ],
          "diseases": [
            "damping off",
            "viruses",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Summer Squash",
          "img": "http://www.growinganything.com/image-files/growing-squash.jpg",
          "description": "Growing squash – either winter or summer squash - is ideal for the beginning gardener. It's easy to grow and comes in many varieties. This page focuses on summer squash... for winter squash, see our Growing Butternut Squash page. Full sun and moist, well drained soil that has been augmented with organic matter will help assure high summer squash yields. These plants are also perfect for container gardening. Squash seeds for transplanting into the garden should be potted about three to four weeks before the last frost is expected. Plant three to four seeds per pot, one inch 2.5 cm) deep. It is best to use a container that can go into the ground to avoid disturbing the roots. Keep the containers' soil moist to aid germination, but do not overwater squash seeds. If you sow squash seeds directly into your garden, be sure to wait until your soil is above 70 degrees F (21 C). Otherwise, the seeds won’t germinate. You can plant your summer squash in rows (at least 6 inches/15.2 cm apart) or hills (two or three seeds or seedlings per hill, one inch/2.54 cm deep with 12 to 18 inches (30.5 to 45.8 cm) between hills). For a longer harvest, plant succession crops in one month intervals. For transplanting squash, once squash seed have sprouted, thin the plants, leaving two seedlings in each container. Harden off the plants in a protected outdoor location for several days, then plant in hills at least one foot (30.5 cm) apart. Remove garden weeds by hand and water plants once a week during dry weather conditions. A layer of compost used as mulch will help to nourish the growing plants. An organic nitrogen fertilizer is also helpful for foliage, but only when added before plants bloom. Once blooms have set, nitrogen can interfere with their development. As their name implies, summer squash like it warm. If the temperature in your region falls below 65 degrees F (18 C) at night, consider covering your plants with row covers to keep them insulated. Squash is ready for harvest when it's about two inches (5 cm) in diameter and/or six to eight inches (15 o 20 cm)long, although many find smaller fruits to be tastier. Early removal of young squash also allows the plant to keep producing and provides gardeners with a bounty of tender and delicious squash. Freshly harvested squash should be carefully washed to remove any soil. Handle carefully, as young squash will bruise easily. Squash can be stored in the refrigerator, preferably in a crisper drawer, for no longer than two to four days. To prepare squash for freezing, cut into one half inch (1.3 cm) slices and water blanch for three minutes. Cool promptly, then drain and package for the freezer. Frozen squash is good for up to two months. Any leftover squash seed you may have will be viable for up to four years.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not tolerate frosts",
          "soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1 inch/ 3 cm",
          "row_spacing": "6 inches",
          "days_to_germ": "6-15 days",
          "soil_ph": "6.0-7.5",
          "growing_soil_temp": "70-80 degrees F (21-27 degrees C)",
          "time_to_harvest": "6-10 weeks",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "cucumber beetles",
            "spider mites"
          ],
          "diseases": [
            "curly top",
            "viruses",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Sweet Potatoes",
          "img": "http://www.growinganything.com/image-files/growing-sweet-potatoes.jpg",
          "description": "Growing sweet potatoes is easier than growing regular potatoes, especially in warmer climates. They are started from transplants and vine cuttings instead of seeds. The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now... For effectice, healthy and/or well-rounded options, click the following links...Back to GrowingAnything.com Organic Gardening Advice Home PageSweet potatoes need full sun and can tolerate poor soil and conditions that are fairly dry. Once established, sweet potatoes are also somewhat drought-tolerant. Learning how to grow sweet potatoes involves using   sprouts taken from mature rooted cuttings about twelve weeks before the date you want to plant them. Sprouts may be obtained by submerging (roughly) the bottom third of a sweet potato in a jar half filled with water. Place the jar in a sunny location and remove sprouts when they are about six inches long. Place the sprouts in damp sand until they root, which will take about three weeks. In a bed with good drainage, plant sprouts about a foot and a half (46 cm) apart.Once your sweet potato seedlings have been placed in their permanent garden spot, water them daily for the first week and every other day during the second week. Sweet potatoes produce less if their soil is dry.Keep garden weeds pulled until the vines are developed enough to spread over the area. Pinch out the tops of the growing stems for bushier plants.In the three to four weeks before harvest, limit watering to help protect the roots.You’ll know your sweet potatoes are ready when the leaves on the vines start to turn yellow. Harvest your sweet potatoes with a hand trowel before the first frost.  You can also use a garden fork, but be careful as the vegetable is easily damaged.  After they’re out of the ground, arrange them in the sun or a dry humid room to cure for about ten days - 80 to 85 degrees F (27 to 29 C) is ideal.The green leaves left on the sweet potato vine are edible.Proper storage is necessary for about six weeks after curing so that the sweet potatoes can develop their sweetness and characteristic moistness. After this time, sweet potatoes held under ideal conditions will keep for two to six months.For freezing, place sweet potatoes in freezer bags after baking them whole, peeling them or wrapping them individually in foil. Sweet potatoes can also be stored in containers and frozen after washing and by cooking them in water or after steaming then cooling, slicing or mashing them.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not tolerate frosts",
          "soil_germ_temp": "60-85 degrees F (21-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "4-5 inches/5-10 cm",
          "row_spacing": "18 inches",
          "days_to_germ": "10-20 days",
          "soil_ph": "5.6-6.5",
          "growing_soil_temp": "75-80 degrees F (24-27 degrees C)",
          "time_to_harvest": "12-16 weeks",
          "seed_longevity": "2-4 months",
          "pest": [
            "aphids",
            "cutworm",
            "whiteflies"
          ],
          "diseases": [
            "ring rot",
            "early blight",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Swiss Chard",
          "img": "http://www.growinganything.com/image-files/growing-swiss-chard.jpg",
          "description": "Growing Swiss chard is among the easiest of all leafy greens.  It does need full sunlight (at least 4 hours per day) and plenty of water in order to thrive, but it can grow in many different types of soil.  The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now...Planting depth: about 1 inch (25 mm)Spacing in rows: about 8 inches (20 cm)Germination soil temperature: 50 to 85 degrees F (10 to 29.4 degrees C) Days to germination: 10 to 20 days For effectice, healthy and/or well-rounded options, click the following links...Storage temperature: 32 to 40 degrees F (0 to 4.44 degrees C) Humidity: 90 to 95% relative humidity Storage life (unfrozen in above conditions): about 2 weeks Storage life (frozen): Up to 1 year Seed longevity: About 4 years Back to GrowingAnything.com Organic Gardening Advice Home PagePlanting Swiss chard is very similar to planting beets, its close relative. And like beets, Swiss chard is a hearty plant, able to grow in almost any condition other than very hot or very cold temperatures.While it is tolerant of many soil types, having a soil that is rich in organic matter will help them produce even more delicious vegetables. A few weeks before you plant, mix a few inches (8 cm) of compost into the top 6 inches (16 cm) of soil to give your plants the nutrients they prefer.When you’re ready to plant,  broadcast seeds onto a garden bed that receives partial shade a couple of weeks before the last expected frost date, then rake over a thin layer of soil. You can also transplant Swiss chard from nursery-bought plants.Regardless of whether you start from seed or a transplant,  maintain about 8 inches (20 cm) between the plants (thin them out if you started from seed) throughout the growing season.Give your Swiss chard plants between 1 to 2 inches (2.5 to 5 cm) of water each week and spread mulch around them to conserve the soil moisture and keep the garden weeds at bay.  You should protect seedlings and transplants with a floating row cover in the early growth stages, especially in cooler climates (use a heavyweight row cover in colder climates). If you have less than ideal soil, fertilize with a liquid organic garden fertilizer when they get to be about six or seven inches (16 cm) tall.You can start enjoying your Swiss chard’s leaves (can be eaten when small or large) and stems (can be steamed and eaten like asparagus) at any time after the leaves form.  This is usually in the summer, though you may also be able to harvest Swiss chard in the fall if they didn’t overheat during summer (if they did, you can also replant in summer for a fall harvest).You can choose to cut the entire plant a few inches (8 cm) above the ground or just the large outer leaves.  By cutting just the large outer leaves, you leave the smaller leaves to develop for future harvests.You can store Swiss chard in plastic bags and place in the refrigerator for up to two weeks after harvesting.  For storage, select young and tender green leaves from your collection, wash them thoroughly, cut off any woody stems and cut the leaves into pieces.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "hardy will survive hard frosts",
          "soil_germ_temp": "50-85 degrees F (10-30 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1 inch",
          "row_spacing": "8 inches",
          "days_to_germ": "10-20 days",
          "soil_ph": "6.0-7.5",
          "growing_soil_temp": "50-85 degrees F (10-30 degrees C)",
          "time_to_harvest": "10 weeks",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "crickets",
            "seedcom maggots"
          ],
          "diseases": [
            "damping off",
            "viruses",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Tomatoes",
          "img": "http://www.growinganything.com/image-files/growing-tomato-plants.jpg",
          "description": "Growing tomato plants in a home garden is universally popular, perhaps because tomatoes are relatively easy to grow. Since their native lands are warmer than most of the U.S. and Canada, your biggest challenge for a bountiful tomato harvest will be to maintain warmer surroundings from start to finish. The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now... For effectice, healthy and/or well-rounded options, click the following links...Back to GrowingAnything.com Organic Gardening Advice Home PageTomatoes may be started from seed, or purchased as young plants ready for the garden. If you are tomato lover who wants to enjoy a rich harvest of vine-ripened (or green) tomatoes this summer, a few tomato growing tips are in order.Tomato seeds may be planted in almost any type of container as long as there is good drainage. You can use light, pre-moistened soil, but a good seed staring mix will probably yield better results. Plant seeds about 1/8 inch (3mm) deep.Seeds may be planted as close together as one inch (2.5 cm) since they will all be transplanted after germination. Many people like to place plastic loosely over the seeds at this point to warm the plants and soil to a more desirable temperature, thus simulating a greenhouse. Make sure the soil does not dry out and that the seeds receive full sun during the day. Tomatoes need at least 8 hours of sunlight a day to produce well. A watered down dose of organic fertilizer for vegetables every couple of weeks is also a good idea at this stage.Young tomato plants have the same soil and water requirements as seedlings and should be planted only after the soil has warmed and frost dangers are over. To more easily maintain tomato plants’ preferred temperature, many gardeners prefer to transplant tomato seedlings into larger containers before transitioning them to the garden.You’ll also need to decide if you want to let your tomato plants sprawl onto the ground as they grow, or if you want them to climb cages, stakes or trellises.  If they don’t have supports, you’ll need to plant them further apart: 24 to 36 inches ( 61 to 91.4 cm) vs. about 15 inches (38.1 cm).For the plant to bear more fruit, fertilize sparingly with a balanced organic garden fertilizer until the plant is well established and in full flower. An organic kelp solution can be sprayed on tomato plants several times during the growing season to help make them more disease-resistant.Pruning also helps with many tomato varieties, especially trellised or caged tomato plants.  Focus your pruning efforts in two places: anything that grows above the cage or trellis and the so-called “sucker” leaves that grow between the main stem and the larger outer leaf stems.If you live in a colder region, consider using row covers to maintain a higher soil temperature until the plant flowers or temperatures hit 85 degrees F (29 C).Allow the soil around the plants to dry out a bit between each watering. Using mulch around the plants can help with moisture retention and can help to limit garden weeds. Tomatoes are ready for harvest when their color is even, the skin looks smooth and waxy and the fruit feels firm with just a bit of give when pressed with a finger.Pull tomatoes free from the vines by hand with a gentle twist. If they don’t come off easily, clip the stems just above the fruit.You can keep ripe tomatoes at their peak of good flavor for about a week at 55 to 60 degrees F (12.8 to 15.6 C), while tomatoes that need to ripen at bit more should be kept at 65 to 70 degrees F (18.3 to 21.1 C).Do not store tomatoes in a refrigerator!Green tomatoes may be kept for 3 to 5 weeks if they are wrapped in newspaper and checked for signs of ripeness weekly. Tomatoes may be frozen raw, stewed (cooked for 10 to 20 minutes), or as juice (cooked 5 to 10 minutes). Green tomatoes may also be frozen in slices, with no blanching needed.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not tolerate frosts",
          "soil_germ_temp": "70-80 degrees F (21-27 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1/8 inch/3 mm",
          "row_spacing": "15 to 36 inches depending on use of supports or trellis",
          "days_to_germ": "6-10 days",
          "soil_ph": "5.5-7.5",
          "growing_soil_temp": "60-85 degrees F (16-30 degrees C)",
          "time_to_harvest": "16-20 weeks",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "worms of several varieties",
            "snails/slugs"
          ],
          "diseases": [
            "curly top virus and wilt virus",
            "blight",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Turnip",
          "img": "http://www.growinganything.com/image-files/growing-turnips.jpg",
          "description": "Growing turnips is especially easy (and fast) in early spring and late fall when the weather is cooler.  Temperatures over 75 degrees F (23.9 C) will leave you with less than ideal turnip roots and greens.  The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now... For effectice, healthy and/or well-rounded options, click the following links...Back to GrowingAnything.com Organic Gardening Advice Home PagePlant turnip seeds in fertile, loose and well-drained soil. If you can give them full sun, do so, but if your sunny space is limited turnips can also grow well in partial shade.Before planting – which should be done a few weeks before the last frost in the spring and/or in the late summer/early fall as the weather starts to cool down - mix compost or well-rotted manure 6 to 8 inches into the soil. Plant seeds about three inches apart (7.6 cm) and about ½ inch (12.5 mm) deep.You can start harvesting in four to six weeks, so continue planting each week for successive harveests until you are about four weeks out from consistent 75+ degree (24 C) days.Turnips are relatively easy to maintain once they’re planted.  Keep them relatively well-watered, doing your best to avoid getting their greens wet in the process.Your biggest challenge may be pests such as flea beetles, root maggots or cabbage worms, especially just before summer hits. See our Organic Garden Pest Control page for ways to keep them under control.If you want the best and mildest flavor from your turnip roots, dig them up when they’re younger and the roots are about two inches (5 cm) wide.  Harvest the greens about this time as well, but if you leave the roots in the ground, be sure to leave some greens for the plant to use!Also do your best to have them out of the ground before temperatures reach the 80’s (26.7+ C) for best flavor.For your fall turnip crop, leave them in the ground until you are ready to use them.  They’ll be just fine as long as you’ve applied a thick layer of heat-holding compost like straw. For out-of-ground storage, wash the roots, trim the tops to ½ inch (1.27 cm), place them in perforated plastic bags and store in a cool place where they can maintain their moisture. Either a refrigerator or cold moist cellar will do the trick. You can also freeze turnips.  Choose small- to medium-sized firm and tender ones, wash, peel, and cut them into ½-inch-sized cubes, water blanch for 2 minutes, cool, package, seal and freeze them.",
          "sun_amount": "Full sun to partial shade",
          "weather_tolerance": "hardy will survive hard frosts",
          "soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "0.5 inch/12 mm",
          "row_spacing": "3 inches",
          "days_to_germ": "6-10 days",
          "soil_ph": "5.5-7.0",
          "growing_soil_temp": "60-75 degrees F (16-24 degrees C)",
          "time_to_harvest": "6 weeks for early plantings, 12 weeks for fall harvest",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "cabbage worms",
            "wireworms"
          ],
          "diseases": [
            "anthracnose",
            "leaf spot",
            "clubroot"
          ]
        }),
        knex('plants').insert({
          "name": "Zucchini",
          "img": "http://www.growinganything.com/image-files/growing-zucchini.jpg",
          "description": "It’s easy to overdo it when growing zucchini… plant too many seeds and you’ll have more than you know what to do with! Very easy to grow, the zucchini varieties of summer squash may be started from seed or purchased as young plants and may planted in containers or directly sown in the garden. The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now... For effectice, healthy and/or well-rounded options, click the following links...Back to GrowingAnything.com Organic Gardening Advice Home PageIt’s a fast grower and needs fertile soil, plenty of sunshine and a deep watering every few days. Growing zucchini is perfect for those new to gardening. Seeds can either be sown directly into your garden (especially if you live in a warmer climate) or can be planted indoors in peat pots or other containers that can go straight into the ground about a month before freezing temperatures are expected to end. Regardless of whether their starteed indoors or out, zucchini seeds need warm soil to germinate, so make sure that the soil temperature is warm enough - ideally 70 degrees F (21 C) or warmer. You should plant zucchini seedlings or seeds in rows or hills at a depth of about one inch (2.54 cm). In rows, sow seeds at least six inches apart; in hills, sow two or three seeds or seedlings per hilll and leave between a foot and a foot and a half (30.5 to 45.8 cm) between the hills. Zucchini may also be planted twice during the growing season, once for an early summer harvest and again for a late summer or early fall harvest.Water zucchini plants by soaking the soil underneath and let the top of the soil dry out a bit between watering. While fertilizing zucchini plants monthly with an organic garden fertilizer probably won’t hurt, if you have very fertile soil it probably won’t be necessary.Zucchini will usually put out about fifteen leaves or so before the yellow blooms appear. Each female bloom is a potential zucchini (although if no male flowers have bloomed yet to pollinate them, they may wither and fall off the plant until the male blooms appear).Some varieties of zucchini can be trained to grow up a garden trellis which is useful for those with limited garden space.Zucchini grow quickly, and harvesting the squash while it is still small and tender will help to keep the plants producing. Choosing zucchini that are six to eight inches (15 to 20 cm) long is common, but you may find that they taste better when they're smaller (4 to 5 inches/10 to 12.5 cm).  Either way, your plant should continue producing great-tasting zucchini for at least a month as long as you keep picking them. Though it is tempting to pull off each squash by hand, doing so can damage the plant and reduce production later in the growing season. Instead, use a sharp knife to cut each zucchini from the plant. Zucchini will keep in the refrigerator anywhere from four days to one week. All summer squash – including zucchini - is very perishable, so use a perforated plastic bag for optimum storage.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not tolerate frosts",
          "soil_germ_temp": "70-95 degrees F (21-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1 inch/ 3 cm",
          "row_spacing": "6 inches",
          "days_to_germ": "6-15 days",
          "soil_ph": "6.0-7.5",
          "growing_soil_temp": "70-80 degrees F (21-27 degrees C)",
          "time_to_harvest": "35-55 days",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "cucumber beetles",
            "squash bugs"
          ],
          "diseases": [
            "wilt",
            "blight",
            "mildew"
          ]
        }),
        knex('plants').insert({
          "name": "Strawberries",
          "img": "http://www.growinganything.com/image-files/how-to-grow-strawberries.jpg",
          "description": "Learning how to grow strawberries is easy… almost too easy once they get going and start taking over neighboring walkways and plant space. Sweet, tangy and simply terrific, learning how to grow strawberries organically will give you a flavor unlike any you’ve tasted from the grocery store. Strawberries love the sun and will do well in all types of well-drained soil. Strawberries can be planted by seed, but it will be two years before they can be harvested. The easier way (and the only way for many varieties, since their seeds are extremely hard to come by) is to buy them as small disease-free plants. They can then be harvested the same year and will continue to fruit for many years to come. If you do grow them from seed, then they can be planted into containers or in a bed after they have grown three leaves. Flowers must be picked in the first year to ensure that all nutrients are directed towards the fruits after the plant is established. Either way, your strawberries should be planted in the spring in well-drained soil where they can get plenty of sun. If some shade creeps in for a couple of hours during the day, they’ll probably be just fine. If kept well-weeded and properly fed in well-drained moist soil throughout the growing season, your established strawberry plants will produce for up to 5 years. Strawberries are greedy feeders and should be fed with an organic garden fertilizer about once every two weeks, but be sure to keep the fertilizer away from the leaves. Water regularly to keep the soil moist (but not soggy), but do you best to avoid getting the fruits wet. Water in the mornings to give the morning dew a chance to evaporate before dusk. Apply a straw mulch over the plants in late fall to protect the plants throughout the cold season. When spring returns, open up the mulch a few inches (8 cm) around the plants. To keep berry-picking birds off of your crop, you may also need to put netting over your plants. The strawberries can be picked when they are firm but nicely red. If left for too long, they will go a deep red, become soft and their taste will start to deteriorate. Storing home-grown strawberries is not usually required… it’s much more common to find that they simply disappear (we’re not blaming you), without even making it into the house! But if you are lucky enough to grow a lot, pick them while the ends are still a little white and store them in the refrigerator, where they will keep for up to two weeks. They are also suitable for freezing. Carefully wash them, place them on cookie sheets and freeze.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "hardy- can survive hard frosts",
          "soil_germ_temp": "40-60 degrees F (4.5-15.5 degrees C)",
          "life_cycle": "perennial",
          "planting_depth": "14 inches for large plants-seeds are different",
          "row_spacing": "30 inches",
          "days_to_germ": "7-21 days",
          "soil_ph": "6.0-6.8",
          "growing_soil_temp": "60-80 degrees F (4.5-15.5 degrees C)",
          "time_to_harvest": "if grown from seed, 2 years; if grown from plants- 20 weeks",
          "seed_longevity": "2-3 years",
          "pest": [
            "aphids",
            "birds",
            "slugs"
          ],
          "diseases": [
            "strawberry wilt",
            "mildew",
            "gray mold"
          ]
        }),
        knex('plants').insert({
          "name": "Raspberries",
          "img": "http://www.growinganything.com/image-files/growing-raspberries.jpg",
          "description": "Growing raspberries is extremely rewarding, especially if you’re new to gardening. With summer- and autumn-fruiting canes, you can have a long season of delicious berries. The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now... For effectice, healthy and/or well-rounded options, click the following links...Back to GrowingAnything.com Organic Gardening Advice Home PageWhat’s more, they’re packed with goodness including Vitamins A, C & E as well as fiber, folate and antioxidants. Raspberries are self-pollinating so you don’t need to plant more than one variety. Prepare soil well before planting. Choose an open area with plenty of sunlight and good ventilation. Once raspberries are established, it will be difficult to tidy up any perennial weeds. Make sure any weeds are cleared with any perennial weed roots completely dug out. The ground should be dug over to at least one spade spit depth. Add organic matter such as garden compost or well-rotted manure before planting. Dig a hole the depth of the bare roots and plant the raspberries so that they are level with the surrounding soil. There are two distinct types of raspberry that will need slightly different care:Summer-fruiting varieties should be planted in early spring as soon as you can work the ground. Plant these raspberries in rows. There should be 24 inches (60cm) between each plant. If you’re having more than one row, leave 8 ft (2.4m) spacing between rows. Everbearing varieties can be planted in the same way. Its also possible to plant them in the fall after planting cut their canes back to about 4 inches (10cm) from the ground.The canes that emerge from the ground for the raspberry fruit to grow on either grow for one or two years depending on the variety. Summer fruiting varieties develop on the previous year’s growth. Later fall fruiting varieties will develop raspberries on their cane’s first year growth. Plants will need at least 1.5 inches (4 cm) of water a week during the time between flowering and harvest. They benefit from an annual mulch or compost or manure applied in the spring. To foster fruit production and keep your plants healthy, prune your raspberries correctly for the variety you’ve planted…Raspberries are usually able to withstand winter cold and frosts, although some varieties are more sensitive to the cold.  For the less tolerant varieties, protect them by bending the top of the canes over to the ground and scooping just enough soil on top to hold them down.It’s best to pick your raspberries in the early morning before the sun gets too strong. They’re ready to pick when their color takes on a dusty appearance. They’ll come away easily from the plant when you go to pick them.Summer varieties will be ready first, followed by everbearing fall crops that can last until late in the autumn, especially if the weather is mild. Handpick small quantities regularly as they won’t last for long in the refrigerator. If you have large amounts that ripen all at once, freeze for later use.Before storing your raspberries you need to remove any that appear damaged or diseased from your harvest. Raspberries won’t last beyond a day if left unrefrigerated. They’ll last up to three days if refrigerated. Don’t wash them until you’re ready to eat them if you’re storing them in the fridge. For longer-term storage, raspberries freeze well. Wash them in a colander, then remove the stems and gently place the fruit into a container for freezing. Allow room for them to expand up to ten per cent when frozen.Everbearing raspberries do not lose as many fruit to birds as summer-fruting varieties.  To control a bird problem, summer fruiting varieties are sometimes grown in fruit cages. These structures use netting fitted across a frame to keep the birds out. If your raspberry plants develop rusts, this cannot be cured. Dig up and dispose of the crown and canes of diseased plants so that other plants don’t become infected. Look for weak or distorted leaves and shoots. When new leaves are unfolding in the spring they may be misshapen and have some colored pustules.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "hardy- plants can survive hard frosts",
          "soil_germ_temp": "40-60 degrees F (4.5-15.5 degrees C)",
          "life_cycle": "perennial",
          "planting_depth": "cover roots and grow from plant not seed",
          "row_spacing": "24 inches",
          "days_to_germ": "varies",
          "soil_ph": "5.5-7",
          "growing_soil_temp": "60-80 degrees F (4.5-15.5 degrees C)",
          "time_to_harvest": "varies depending on variety chosen",
          "seed_longevity": "n/a",
          "pest": [
            "psyllid",
            "Japanese beetles",
            "borers"
          ],
          "diseases": [
            "cane blight",
            "mildew",
            "root rot"
          ]
        }),
        knex('plants').insert({
          "name": "Blueberries",
          "img": "http://www.growinganything.com/image-files/growing-blueberries.jpg",
          "description": "Growing blueberries in pots and containers is a great way to create a supply of your own superfood. Blueberries are a wonderful source of vitamin C and have one of the highest concentrations of antioxidants of all fruits and vegetables.  The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now... For effectice, healthy and/or well-rounded options, click the following links...Back to GrowingAnything.com Organic Gardening Advice Home PageThey’re a native fruit plant to North America and grow well in most regions as long as you have acidic soil and at least 140 frost-free days per year. Blueberry bushes are also perfect for organic gardeners as these relatively pest-free plants can be grown easily without using pesticides.Blueberries are not usually grown from seed by home gardeners because growing from seed will often not result in fruit.  Instead, choose either a bareroot plant or small plants that are two or three year’s old. Blueberry bushes can self-pollinate, so you don’t need to plant more than one. However, to increase the size and amount of blueberries you can grow, it’s worth planting two different cultivars though so that pollination is increased. They also need at least 140 frost free days a year. They don’t like a wet site, so make sure you plant them in an area that drains well. Speaking of pH, blueberry bushes need an acidic soil to grow well and produce fruit… ideally a soil pH of less than 5.0. If your soil is naturally more than pH 7.0, you may struggle to reduce it enough to be successful. In these circumstances, you’re more likely to have a plant that flourishes if you plant it in a pot with organic ericaceous (acidic) potting compost. To prepare the planting area, dig the soil over and add well-rotted manure or garden compost before planting. Adding organic matter to your soil also helps lower the soil pH over time, which blueberries prefer. To speed this up you can add an acidic organic mulch like pine needles. When planting, dig a hole as deep as the plant in the tub or the bare root. Blueberry bushes have shallow and wide root systems, so you don’t need to dig too deeply. It’s worth allowing about 60 inches (150cm) around your bush so its roots can spread out over the years.If you’re lucky, your blueberry bush may produce a few berries in its third year. But it can take up to eight years to get a full harvest. To get the most out of your plant, you need to be organized about your pruning each year. For best results, follow this blueberry pruning routine…Continue to mulch with organic manure and compost each spring to improve the soil.Your blueberries are ready to eat when they have ripened to a full color. In other words, when they look good enough to eat, pick one and try it.  If you like the taste, harvest!Ripe berries will come off the stem easily. Be careful not to squeeze too hard as you pick each berry off so they’re not bruised. Once your blueberries are harvest-ready, they’ll usually last about a week on the bush, so don’t dilly-dally for too long.Your blueberries will last up to two weeks in the refrigerator. To get the most nutritional value eat them fresh from picking. Don’t wash your blueberries before freezing them as this will toughen their skins.While the lists below are relatively lengthy, blueberries don’t have as many pest problems as most other fruits. Good garden hygiene and catching pests and diseases early will keep your bushes healthy.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "hardy- can survive hard frosts but not temperatures below -20 F or -29 C",
          "soil_germ_temp": "n/a",
          "life_cycle": "perennial",
          "planting_depth": "cover root of plant",
          "row_spacing": "60 inches",
          "days_to_germ": "n/a",
          "soil_ph": "less than 5.0",
          "growing_soil_temp": "can handle a wide range of temperatures",
          "time_to_harvest": "from 3 years to 8 years",
          "seed_longevity": "n/a",
          "pest": [
            "blueberry tip borer",
            "cherry fruit worm",
            "maggot"
          ],
          "diseases": [
            "fruit rot",
            "blight",
            "viruses"
          ]
        }),
        knex('plants').insert({
          "name": "Blackberries",
          "img": "http://www.growinganything.com/image-files/growing-blackberries.jpg",
          "description": "Growing blackberries is a great way to get natural fiber and vitamin C into your diet, and a well-tended blackberry plant will give you a summer’s worth of berries for jams, pies and juices. Plus they’re easy to grow for gardeners of all levels... Before you continue reading below, check out the following overview pages if you haven't done so already. They contain important general instructions that apply to most types of fruit trees... The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now... For effectice, healthy and/or well-rounded options, click the following links...Back to GrowingAnything.com Organic Gardening Advice Home PageBlackberries are easily grown from one-year old bareroot plants. These need planting when they’re dormant during mid or late winter. Avoid times when the ground is waterlogged or frozen. Most varieties will need some trellising or training in order to support the weight of the plant’s fruit, and you’ll need to plan this at the planting stage. If you’ve chosen an erect blackberry, this can be planted near a fence. If you don’t want to train them you’ll need to prune the tips regularly. For trailing varieties, create a simple two-wire trellis.  Use two wooden six-foot (1.8m) fence posts spaced at about 8 to 10 feet (2.5-3m) apart. Use two wires to join the posts running at 2 feet (.6m) and 4 feet (1.2m) from the ground. Make sure the planting area is weed free, then dig a shallow hole that is just deep enough to hold the roots. Spread them out horizontally and cover with soil, then firm the soil around the plant’s base. Mulch with well rotted organic garden manure after planting.Blackberries are biennial and produce fruit on the previous years’ canes; Each spring and summer the plant will grow new canes that will not produce any fruit that season. These are called “primocanes”. The following year, as they continue to flower and fruit they are called “floricanes”. The floricanes will die after fruit production to be replaced by that year’s primocanes next season. As the primocanes grow on trailing varieties, tie them into the wire supports. If you’ve chosen an erect variety, prune the tips so they do not grow higher than four feet (1.2m). This will prevent them from bending and snapping from the weight of the fruit. Blackberries will need regular, weekly watering from mid spring to early fall, especially if rainfall is low. If there is winter drought it is also worth watering your blackberries every few weeks so that existing primocanes aren’t damaged. Give the area surrounding the plant a mulch of well-rotted organic manure each spring.Blackberries are ready for harvest from mid to late summer. They won’t ripen after they’re harvested, so pick your blackberries every three days to get the highest-quality fruit. Unlike raspberries, when you pick your blackberry the central plug will come off too. Pick by hand when they begin to lose their shine and appear slightly dull. They should come off the plant easily.Blackberries need careful handling since bruised fruit is more likely to deteriorate quickly. Store them in the refrigerator immediately after picking and they’ll last for a couple of days. For longer-term storage (up to 8 months), rinse quickly without allowing the fruit to stand in water, then lay them out as a single layer to dry. Next put them in a freezer bag and freeze.Birds love to feed on ripening blackberries. To protect them you can cover with a fine gardening mesh as the blackberries start to ripen. The planting location of blackberries is the most significant factor for keeping them disease free. Blackberries should always be in full sun with no shade through the day. If they’re planted on wet sites, they will attract fungi and infection.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "hardy- can survive hard frosts",
          "soil_germ_temp": "grow from plants",
          "life_cycle": "perennial",
          "planting_depth": "cover roots when planting",
          "row_spacing": "100-150 inches",
          "days_to_germ": "n/a",
          "soil_ph": "5.0-7.5",
          "growing_soil_temp": "n/a",
          "time_to_harvest": "18 months when grown from bare root canes",
          "seed_longevity": "n/a",
          "pest": [
            "aphids",
            "Japanese Beetle",
            "spider mites"
          ],
          "diseases": [
            "cane blight",
            "mildew",
            "rust"
          ]
        }),
        knex('plants').insert({
          "name": "Cantaloupe",
          "img": "http://www.growinganything.com/image-files/how-to-grow-cantaloupe.jpg",
          "description": "If you'd like to learn how to grow cantaloupe (technically a type of muskmelon), the first step is making sure you have plenty of room in your garden... just one plant can take up to 40 square feet (3.72 square meters). They also need at least three months of warm temperatures, making them much easier to grow in the South… Cantaloupes, like most melons, do not tolerate cold temperatures, so wait until all chance of frost has passed and the soil has warmed up to at least 70 degrees Fahrenheit (21 degrees Celsius) - preferably higher - before planting your cantaloupe seeds. Plant them in a fertile spot that receives full sun and use black plastic mulch, floating row covers, or plastic tunnels to help warm the soil a few weeks before planting, especially in cooler climates. For an earlier harvest, start sees indoors about 3 weeks before the last frost. In order for your cantaloupes to grow well they need about an inch of water each week. Water them carefully, doing your best to avoid their leaves as wet foliage can lead to diseases. To help prevent this, water in the mornings to allow time for evaporation. To give your cantaloupes the nutrients they need to grow big, apply a healthy layer of organic mulch (ideally compost) as the vines start to stretch out. Apply a liquid organic garden fertilizer weekly until this time. If at any time the emerging leaves appear yellowish, give them some more fertilizer. During growth, don’t be surprised when a couple of melons start to grow then shrivel. This is perfectly normal. You know it's time to harvest your cantaloupes when the stem easily separates from the melon. You can test this by placing your thumb beside the stem and gently applying pressure. If the stem separates with little force, you know it's the perfect time to harvest. You can also just pick up the cantaloupe. If it separates easily, it’s ready. Store ripe cantaloupes in the refrigerator for up to 14 days. It is also possible to freeze cantaloupe. If you do, freeze the entire cantaloupe rather than sections of it. Cantaloupe seeds usually have a longevity of about 5 years.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not survive frost",
          "soil_germ_temp": "75-95 degrees F (24-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1 inch/25 mm",
          "row_spacing": "15 inches",
          "days_to_germ": "5-8 days",
          "soil_ph": "6.0-6.5",
          "growing_soil_temp": "75-95 degrees F (24-35 degrees C)",
          "time_to_harvest": "16 weeks",
          "seed_longevity": "5 years",
          "pest": [
            "aphids",
            "cutworms",
            "slugs"
          ],
          "diseases": [
            "curly top",
            "mildew",
            "white mold"
          ]
        }),
        knex('plants').insert({
          "name": "Watermelon",
          "img": "http://www.growinganything.com/image-files/growing-watermelon.jpg",
          "description": "Growing watermelon is much easier than people tend to think.  As long as you have healthy soil, plenty of garden space, access to good compost and organic fertilizer and at least some warmth and sunshine, then you will enjoy plump, juicy and seed-spittingly delicious watermelons straight from your garden. The following resources offer effective, healthy and/or well-rounded options. Click the links to go there now... For effectice, healthy and/or well-rounded options, click the following links...Back to GrowingAnything.com Organic Gardening Advice Home PageBefore planting watermelon seeds, be sure that the soil has reached at least 60 degrees F (15.5 C) and that all danger of frost has passed.  To be sure the soil is ready when you plant, cover soil with black plastic or landscape fabric a few weeks before planting. The seeds will need plenty of water, but be sure that their soil remains well-drained.  Plant them in well-composted soil, and mix a good organic garden fertilizer into the surrounding soil.You can also start your seeds off in a cold box or indoors.  If you go this route, time your sowing so that you’re transplanting about three weeks later.  Keep the temperature warm at first (about 85 degrees F/29 C), then turn it down to between 70 and 75 F (24 C) after germination. There are two methods for growing watermelons in the garden: hills or rows.  If you are a beginner, then traditional rows will make it easier to water, of which watermelons need plenty! Regardless, be sure that your watermelon plants will get full sunshine.Watermelons’ sprawling vines and large fruits require plenty of space, so leave at least 5 or 6 feet (1.5 to 1.8 m) between plants.Watermelons are hungry plants, so their soil should be kept well-weeded with a healthy layer of compost.  Ongoing applications of liquid organic fertilizer may also be appropriate, especially if some of the new leaves emerge with a lighter-green color. Keep the plants well-watered until the melons begin to grow, after which you can ease up a bit.  Just make sure that the soil doesn’t dry out. Always make sure they are well watered and because they can be attacked by a number of bugs, keep an eye on how they are progressing. Usually the seed packet will give an estimation of when your chosen variety of watermelons will be ready, but expect about 3 months after sowing.  A watermelon can be assessed as being ripe by looking at its belly.  If the belly is a really nice buttery yellow or creamy color (not white), then the watermelon is ripe for picking and should simply be cut off and enjoyed fresh! A ripe watermelon will also sound very flat when it is tapped… the noise is like a dull thud rather than the “ringing” sound heard when tapping a not-ready melon.Watermelons are best eaten fresh, but they can keep for over a week if refrigerated.  For up to 6 months storage, chopped watermelon pieces can also be frozen after the seeds have been removed.",
          "sun_amount": "Full sun at least 6 hours",
          "weather_tolerance": "warm season- will not survive frost",
          "soil_germ_temp": "75-95 degrees F (24-35 degrees C)",
          "life_cycle": "annual",
          "planting_depth": "1-2 inches/25-50 mm",
          "row_spacing": "72-96 inches",
          "days_to_germ": "5-8 days",
          "soil_ph": "5.5-7.0",
          "growing_soil_temp": "60-95 degrees F (15-35 degrees C)",
          "time_to_harvest": "3 months",
          "seed_longevity": "4 years",
          "pest": [
            "aphids",
            "cutworms",
            "squash bugs"
          ],
          "diseases": [
            "curly top",
            "fungus",
            "mildew"
          ]
        })
      ])
    })
}
