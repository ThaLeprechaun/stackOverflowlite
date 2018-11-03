const app = require("./app");

app.listen(process.env.PORT || 80, () => {
  console.log("App listening on port 3000"); /* eslint-disable-line no-console */
});
