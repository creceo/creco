// start about table
// end about table

const models = require("./../models");

models.sequelize
  .sync({
    //  force: true
  })
  .then(() => {
    console.log("✓ DB connection success.");
    console.log("  Press CTRL-C to stop\n");
  })
  .catch(err => {
    console.error(err);
    console.log("✗ DB connection error. Please make sure DB is running.");
    process.exit();
  });

const service = {
  // start about table
  // end about table
};
module.exports = service;
