const mongoose = require("mongoose");
const dbConnect = () => {
  return mongoose.connect(
    "mongodb+srv://masai-ticketing:masai-ticketing@masai-ticketing-system.82nyrlp.mongodb.net/masai-ticketing"
  );
};

module.exports = dbConnect;
