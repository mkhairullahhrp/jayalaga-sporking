import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import BookingRoute from "./routes/BookingRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import SequelizeStore from "connect-session-sequelize";
import db from "./config/Database.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(UserRoute);
app.use(BookingRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
