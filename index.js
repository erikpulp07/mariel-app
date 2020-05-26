// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */


const empleadoRouter = require(`./src/routes/empleado`);

app.use(`/api/empleados`, empleadoRouter);

app.get("/", (req, res) => {
    res.status(200).send("EGUI is the BEST");
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
