import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middleware/error.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// app.options("*", cors());
// parse json bodies
app.use(express.json());

// parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));

// router
app.use("/api/reservation", reservationRouter);
app.get("/",(req,res)=>{
  res.send({
    message:"good"
  })
})

dbConnection();

app.use(errorMiddleware);

export default app;
app.listen(process.env.PORT,()=>{
  console.log(`Server is running on Port http://localhost:${process.env.PORT}`)
});
