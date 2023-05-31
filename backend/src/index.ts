import express from "express";
import cors from "cors";
import config from "../config";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
