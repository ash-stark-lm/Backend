//require("dotenv").config({ path: "./.env" });
import dotenv from "dotenv";
import connectDB from "./db/db.js";

import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error: ", err);
      throw err;
    });

    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server running on port ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => {
    console.log(":MongoDB connection FAILED: ", err);
  });
