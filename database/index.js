const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// mongosh "mongodb+srv://cluster0.0pynpbj.mongodb.net/twitter" --apiVersion 1 --root <root>
// mongodb+srv://root:root@cluster0.rqznbqj.mongodb.net/twitter
  // .connect("mongodb+srv://root:root@cluster0.rqznbqj.mongodb.net/twitter")

mongoose
  .connect("mongodb+srv://albantsr:albantsr@cluster0.0pynpbj.mongodb.net/twitter")
  .then(() => console.log("connection db ok"))
  .catch((err) => console.log(err));
