const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/routes');

const env = process.env.EVN || 'dev';
const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan(env));
app.use(cors());

app.use('/api', routes);

// page not found error handle
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});


// server internal error handle 
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});