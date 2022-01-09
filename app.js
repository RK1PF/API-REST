// Mongoose core
const MongoDBClient = require("./mongoClient");

// Express core
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 987;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.send("Home Wiki");
});

// API rest
const Articles = require("./controllers/Articles");
app
  .route("/articles")
  .get(Articles.get)
  .post(Articles.post)
  .delete(Articles.delete)
  

app
  .route("/articles/:title")
  .get(Articles.getOne)
  .put(Articles.put)
  .patch(Articles.patch)
  .delete(Articles.deleteOne)
  
  
  
  
// Server
app.listen(PORT, () => {
  console.log(`Server up on http://localhost:${PORT}`);
  MongoDBClient.init();
});
