const model = require('../model/review.js');
const Review = model.Review;

exports.getAllReview = (async(req,res)=>{
    const allreview = await Review.find({});
    res.send(allreview);
})

exports.postReview = ((req,res)=>{
    const doc = new Review(req.body);
    doc.save();
    console.log(doc);
    res.status(200).json(doc);
})