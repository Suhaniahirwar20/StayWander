const mongoose = require("mongoose");
const initData = require("./data");
const listing = require("../Models/listing");

const MONGO_URL = "mongodb://localhost:27017/StayWander";

main()
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj,owner:"69a0600cc6ba22e145f99eeb"}));
    await listing.insertMany(initData.data);
    console.log("data was initialized..");
};

initDB();