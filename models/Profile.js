const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },

  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  high_courses: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  curr_courses: [
    {
      title: {
        type: String,
        required: true
      },
      credits: {
        type: String,
        required: true
      },

      teacher: {
        type: String,
        required: true
      },

      description: {
        type: String
      }
    }
  ]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
