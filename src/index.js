import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { connect } from "mongoose";

dotenv.config({
  path: "./.env",
});

connectDB();
