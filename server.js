import app from "./app.js";
import { db } from "./config/db.js";

const port = process.env.PORT || 5000;

// database
db();

//  localhost :
app.listen(port, () => {
  console.log(`local host running at port ${port}`);
});
