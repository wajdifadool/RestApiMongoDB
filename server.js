const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();
const app = express(); // we create the route on the app instancea

// Body parsere middleware
app.use(express.json()); // allow the  server accepting raw json
app.use(express.urlencoded({ extended: false }));
//when  adding te midlleware we can accses the req.body.whatever

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

/** create routes  */
// End poinnt , callBack
app.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcom to ideas API ' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);
