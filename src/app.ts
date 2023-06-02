import express from "express";
import cors from "cors";
import publicationRouter from "./routes/publications";
import userRouter from "./routes/users";
// import middleware here

const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/publications", publicationRouter);
app.use("/api/users", userRouter);

export default app;
