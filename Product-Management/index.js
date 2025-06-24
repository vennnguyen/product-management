const express = require("express");
const route = require("./routes/client/index.route");
const port = 3000;
const app = express();
//cấu hình pug để chạy
app.set("views", "./views");
app.set("view engine", "pug");

//route
route(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
