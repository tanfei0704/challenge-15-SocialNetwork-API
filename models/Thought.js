// Imports
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Define the Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Array of nested reaction documents
},{
  toJSON:{
    virtuals:true,
  },
  id:false,
});


// Create a virtual field for reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the Thought model
const Thought = model('Thought', thoughtSchema);


module.exports = Thought;
