const Express = require("express");
const app = Express();
const Port = process.env.Port || 9076;
const mongoose = require("mongoose");
const Router = require("./Routes/auth.js");
app.use(Express.json());
app.use("/Instagram", require("./Routes/auth"));
app.use("/Instagram", require("./Routes/PostRoute"));
const BodyParser = require("body-parser");
const Path = require("path");
const cors = require("cors");
mongoose
  .connect(
    "mongodb+srv://InstragramClone:I4kJBCezNTLIVuTm@cluster0.gltoq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("mongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(Port, () => {
  console.log("server running at port  " + Port);
});
