const app = require('./app');

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
