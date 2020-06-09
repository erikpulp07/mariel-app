// index.js

/**
 * Required External Modules
 */
const createError = require('http-errors');
const express = require("express");
const path = require("path");
const timeout = require('connect-timeout');
const cacheControl = require('cache-control');
const cors = require('cors')
const dotenv = require('dotenv');
/**
 * App Variables
 */
const {
  error: { serverError, notFound },
} = require('./src/helpers/responseCode/standardResponseCode.json');
const whitelist = ['http://localhost:3000']
const app = express();
const port = process.env.PORT || "8001";
/**
 *  App Configuration
 */
dotenv.config();

app.use(
    cors({
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods',
        'Access-Control-Request-Headers',
        'Access-Control-Allow-Credentials',
        'Accept',
        ('Access-Control-Request-Headers', 'x-csrftoken'),
      ],
      credentials: true,
      origin: (origin, callback) => {
       /** logger.info('request origin: ', origin);
        logger.info('CORS whitelist: ', corsWhitelist);
         TODO check origin NOT NULL */
        if (
            whitelist.includes(origin)
          || ((!origin || origin === 'null' || origin === undefined))
        ) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    }),
  );


app.use(timeout('10s'));
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: true, limit: '200mb' }));
app.use(
  cacheControl({
    noCache: true,
  }),
);

/**
 * Routes Definitions
 */
const empleadoRouter = require(`./src/routes/empleado`);
const empresaRouter = require(`./src/routes/empresa`);
const proyectoRouter = require(`./src/routes/proyecto`);
const usuarioRouter = require(`./src/routes/usuario`);
const cargoRouter = require(`./src/routes/cargo`);

app.use(`/api/empleados`, empleadoRouter);
app.use(`/api/empresas`, empresaRouter);
app.use(`/api/proyectos`, proyectoRouter);
app.use(`/api/usuarios`, usuarioRouter);
app.use(`/api/cargos`, cargoRouter);

app.get("/", (req, res) => {
    res.status(200).send("EGUI is the BEST");
});

  /** Error hanling */
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    //res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log("llega aca")
    if (err.status === 404) {
      notFound.message = err.message || err;
      return res.status(notFound.code).json(notFound);
    }

    const message = err.message || err;
    serverError.message = message;
    serverError.code = err.status || serverError.code;

    return res.status(serverError.code).json(serverError);
  });

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
