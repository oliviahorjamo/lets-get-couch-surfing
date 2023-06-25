import express from "express";
import cors from "cors";
import userRouter from "./routers/users";
import loginRouter from "./routers/login";

const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

//app.use("/api/publications", publicationRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

export default app;
