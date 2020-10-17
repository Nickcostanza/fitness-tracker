const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter what type of exercise this is"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter your exercises name"
        },
        duration: {
          type: Number,
          trim: true,
          required: "Enter the time working out in minutes"
        },
        weight: {
          type: Number,
          trim: true
        },
        reps: {
          type: Number,
          trim: true
        },
        sets: {
          type: Number,
          trim: true
        },
        distance: {
          type: Number,
          trim: true
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;