// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const User = require('./models/User');
// const path = require('path'); // Add this line

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://itxinayat23:sGjWNrR840xzUwU3@smit.gle5x.mongodb.net/?retryWrites=true&w=majority&appName=Smit', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Registration Route
// app.post('/register', async (req, res) => {
//   const { username, password, email } = req.body;

//   const newUser = new User({ username, password, email });

//   try {
//     await newUser.save();
//     res.status(201).send('User registered successfully');
//   } catch (error) {
//     res.status(400).send('Error registering user: ' + error.message);
//   }
// });

// // Serve static files
// app.use(express.static('public'));

// // Serve the HTML form
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });








const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const User = require('./models/User');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://itxinayat23:sGjWNrR840xzUwU3@smit.gle5x.mongodb.net/?retryWrites=true&w=majority&appName=Smit', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Registration Route
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  const newUser = new User({ username, password, email });

  try {
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user: ' + error.message);
  }
});

// Serve static files
app.use(express.static('public'));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
