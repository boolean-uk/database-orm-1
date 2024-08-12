const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const customersRouter = require('./customers');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app!' });
});

// Use the customers router
app.use('/customers', customersRouter);
// If you have other routers, they go here:
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
