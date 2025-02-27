
const express = require('express');
const router = express.Router();
const reviewController = require('../controller/review.js');

router
.get('/reviews', reviewController.getAllReview)
.post('/review', reviewController.postReview)


exports.router = router;