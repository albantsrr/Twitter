const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://root:root@cluster0.rqznbqj.mongodb.net/twitter")
  .then(() => console.log("connection db ok"))
  .catch((err) => console.log(err));
