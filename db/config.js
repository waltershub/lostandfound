const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  name: String,
});

const User = mongoose.model('User', UserSchema);
module.exports.user = User;

const LostSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  location: String,
  description: {
    name: String,
    brand: String,
    color: String,
    condition: Number,
    size: String,
  },
  returned: Boolean,
});

const Lost = mongoose.model('Lost', LostSchema);
module.exports.lost = Lost;

const FoundSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  location: String,
  description: {
    name: String,
    brand: String,
    color: String,
    condition: Number,
    size: String,
  },
  returned: Boolean,
});

const Found = mongoose.model('Found', FoundSchema);
module.exports.found = Found;

const MatchSchema = new Schema({
  found_id: { type: Schema.Types.ObjectId, ref: 'Found' },
  lost_id: { type: Schema.Types.ObjectId, ref: 'Lost' },
});

const Match = mongoose.model('Match', MatchSchema);
module.exports.match = Match;

const MessagesSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String,
  date: { type: Date, default: Date.now },
  to_user_id: { type: Schema.Types.ObjectId, ref: 'User' },
});

const messages = mongoose.model('Messages', MessagesSchema);
module.exports.messages = messages;
