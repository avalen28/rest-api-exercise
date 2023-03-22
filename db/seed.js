require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Show = require("../models/Show");

const shows = [
  {
    title: "The Simpsons",
    creator: "Matt Groening",
    launched: 1989,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description:
      "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition.",
  },
  {
    title: "Bojack Horseman",
    creator: "Raphael Bob-Waksberg",
    launched: 2014,
    genre: "dark comedy",
    image:
      "https://ocioworld.files.wordpress.com/2018/12/bojack-horseman.jpg?w=736",
    description:
      "Meet the most beloved sitcom horse of the 90s - 20 years later. BoJack Horseman was the star of the hit TV show Horsin' Around, but today he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
  },
  {
    title: "The Mandalorian",
    creator: "Jon Favreau",
    launched: 2019,
    genre: "space western",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_fyc_themandalorian_19097_de619ea9.jpeg",
    description:
      "The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. The series follows the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.",
  },
];

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .then(() => {
    return Show.deleteMany({});
  })
  .then(() => {
    return Show.create(shows);
  })
  .then((created) => {
    console.log(`Created ${created.length} shows`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
