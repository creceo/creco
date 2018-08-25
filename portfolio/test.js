var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myappdatabase', { useNewUrlParser: true });

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

var chris = new User({
  name: 'Chris',
  username: 'sevilayha3',
  password: 'password' 
});

chris.save(function(err) {
  if (err) throw err;
  User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
  });
  console.log('User saved successfully!');
});

