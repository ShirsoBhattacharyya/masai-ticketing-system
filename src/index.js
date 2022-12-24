const express = require("express");
const dbConnect = require("./components/config/dbConnect");
const authentication = require("./components/features/middleware/auth.middleware");
const ticketRouter = require("./components/features/routes/ticket.routes");
const userRouter = require("./components/features/routes/user.routes");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const server = express();
server.use(cors());
server.use(express.json());
server.get("/", (req, res) => {
  res.send("Welcome to Masai Ticketing System API.");
});
server.use("/user", userRouter);
server.use(authentication);
server.use("/ticket", ticketRouter);

server.listen(PORT, async () => {
  try {
    await dbConnect();
    console.log(`Server started at port ${PORT}`);
  } catch (e) {
    console.log({ message: "error", response: e.message });
  }
});
