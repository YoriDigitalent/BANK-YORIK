const express = require ('express');
const mongoose = require ('mongoose');
const morgan = require ('morgan');
const router = require ("./router.js");

const app = express();

const MONGODB_URI = `mongodb://localhost:27017/nasabah?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
// Connect to DB
mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
  console.log('Connect to database success');
});

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res, next) => {
  res.json({
    message: 'success',
  });
});

app.use('/api', router);
 
const PORT = process.env.PORT || 8007;

app.listen(PORT, () => {
  console.log(`App listens to port ${PORT}`);
});