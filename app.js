if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");

const ExpressError = require("./utils/ExpressError");

const session = require("express-session");
const MongoStore = require("connect-mongo").default;

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const listingRoute = require("./routes/listing");
const reviewRoute = require("./routes/review");
const userRoute = require("./routes/user");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const MONGO_URL = "mongodb://localhost:27017/StayWander";
const dbUrl = process.env.ATLASDB_URL;

const connectDB = async ()=>{
  try{
    await mongoose.connect(dbUrl);
    console.log("MongoDB Connected");
  }catch(err){
    console.log(err);
    process.exit(1);
  }
};

connectDB();

const store = MongoStore.create({
  mongoUrl : dbUrl,
  crypto:{
    secret : process.env.SECRET
  },
  touchAfter: 24 * 3600,
});

store.on("error",(err)=>{
  console.log("ERROR in MONGO SESSION STORE",err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave:false,
  saveUninitialized:false,
  cookie:{
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge:7 * 24 *60 * 60 * 1000,
  }
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api/listings",listingRoute);
app.use("/api/listings/:id/reviews",reviewRoute);
app.use("/api/auth",userRoute);

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;

  res.status(status).json({
    success: false,
    message,
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
  console.log(`server is listening to port ${PORT}`);
});
