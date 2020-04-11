const router = require("express").Router();
const { Workout } = require("../models");

  // POST
  router.post("/api/workouts", (req, res) => {
      Workout.create({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
      });
  });
    
  
  // GET
  router.get("/api/workouts", (req, res) => {
      Workout.find()
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts/range", (req, res) => {
      Workout.find()
      .sort({ day: -1 })
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
  });
    
  // PUT
  router.put("/api/workouts/:id", (req, res) => {
      Workout.update(
          { _id: req.params.id },
          { $push: {exercises: req.body }
      }).then((dbWorkout) => {
        res.json(dbWorkout);
      });
  });


module.exports = router;
