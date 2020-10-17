const router = require('express').Router();
const WorkoutTracker = require('../models/workout_tracker.js');


router.get('/api/workouts', (req, res) => {
    WorkoutTracker.find()
    .then(workoutdb => {
        res.json(workoutdb);
    })
    .catch(err => {
        res.json(err);
    });
});


router.post('/api/workouts', (req, res) => {
    WorkoutTracker.create({})
    .then(workoutdb => {
        res.json(workoutdb);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
    WorkoutTracker.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true } )
    .then(workoutdb => {
        res.json(workoutdb);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    WorkoutTracker.find({}).sort({'day': 1}).limit(7)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;