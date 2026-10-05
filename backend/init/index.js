const mongoose = require("mongoose");

const initData = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://localhost:27017/StayWander";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});

    const listingsWithOwner = initData.data.map((obj) => ({
      ...obj,
      owner: "69a0600cc6ba22e145f99eeb",
    }));

    await Listing.insertMany(listingsWithOwner);

    console.log("data was initialized..");
  } catch (err) {
    console.log("Error initializing data:", err);
  } finally {
    await mongoose.connection.close();
  }
};

initDB();
