const express = require("express");
const {rootRouter} = require("./routers/root.router");
const app = express();

//setup app sử dụng dạng json
app.use(express.json());
app.use("/api",rootRouter); 
/**
 * method:get
 * url: httlp://localhost:7000/
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
const port = 7000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
