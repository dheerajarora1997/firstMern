import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import queries from "./routes/queries.mjs";
import users from "./routes/users.mjs";

const PORT = process.env.PORT || 8008;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);
app.use("/queries", queries);
app.use("/users", users);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});