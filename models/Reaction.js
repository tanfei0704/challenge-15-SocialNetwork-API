const { Schema, Types } = require("mongoose");


// Define the Reaction schema (to be used as a subdocument)
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAt => createdAt.toISOString(), // Format timestamp on query
  },
});



module.exports = reactionSchema;
