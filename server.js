// Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const htmlRoutes = require("./routes/html_routes");  
const apiRoutes = require("./routes/api_routes");


// GET /notes, return notes.html file
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// update hot restaurant and refer to it
// fill out rest of api routes
// fill out html routes to actually see the renders

app.listen(PORT, () => {
  console.log(`App is currently listening at http://localhost${PORT}`)
})
