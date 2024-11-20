// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true, unique: true }
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true } // Unique constraint
});

const User = mongoose.model('User', userSchema);
module.exports = User;
