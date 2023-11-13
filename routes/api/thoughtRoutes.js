const router = require('express').Router();

// Imports functions written in thoughtController.js file
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thoughtController");
  
// Route -> http://localhost:3001/api/thoughts
router.route("/").get(getThoughts).post(createThought);
  
// Route -> http://localhost:3001/api/thoughts/:thoughtId
router
    .route("/:thoughtId")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
  
// Route -> http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);
  
// Route -> http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
  

module.exports = router;