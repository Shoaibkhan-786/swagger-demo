const express = require("express");
const userRouter = require("./routes/user.route");
const connectDatabase = require("./utils/db.connection");
// const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require('./swagger2.json');
const moment = require('./use-momentjs')

const app = express();
const port = 4002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-swagger',swaggerUI.serve,swaggerUI.setup(swaggerSpec));
app.use(userRouter);



app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong" } = err;
  res.status(status).send(message);
});

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is up and running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("something went wrong", err);
  });
