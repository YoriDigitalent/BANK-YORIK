const dotenv = require ("dotenv");
dotenv.config();

const express = require ('express');
const mongoose = require ('mongoose');
const morgan = require ('morgan');
const router = require ("./router.js");

const app = express();

// Connect to DB
mongoose.connect(process.env.MONGODB_URI,
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

app.listen(process.env.PORT, () => {
  console.log(`App listens to port ${process.env.PORT}`);
});