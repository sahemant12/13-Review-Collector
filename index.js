import {reviewData} from "./reviewData.js"

const userName = document.getElementById("name");
const userReview = document.getElementById("review");
const submitBtn = document.getElementById("submit-btn");
const reviewList = document.getElementById("review-lists");
const starIconList = document.getElementById("rating-icon");
let ratingNum = 0;

//rendering reviews
reviewData.forEach((data)=>renderReview(data));

//submit review
submitBtn.addEventListener("click",submitReview);

//rate the app
starIconList.addEventListener("click",giveRating);



function submitReview(){
    let name = userName.value.trim();
    let review = userReview.value.trim();
    
    if(!name || !review){
        return;
    }

    const now = new Date();
    const formatted = now.toLocaleString(); 

    const user = {
        name:name,
        review:review,
        rating:ratingNum,
        time:formatted
    }   
    userName.value = "";
    userReview.value = "";
    ratingNum=0;
    removeStarRating();
    reviewData.push(user);
    renderReview(user);
}


function renderReview(data){   
    const {name, review, rating, time} = data;  
    const li = document.createElement("li");
    const shortReview = review.length > 50 ? review.substring(0, 50) + "..." : review;
    const btnText = shortReview === review ? "":  "more";
    let ratingStarString = "";
    let notRatingStarString = "";
    for(let star=0; star<rating; star++){
        ratingStarString += "⭐"
    }
    if(rating<5){
        for(let notstar=rating; notstar<5; notstar++){
            notRatingStarString += "⭐"
        }
    }

    li.innerHTML = `<div class="person">
                        <p>${name}</p>
                        <span id="time">${time}</span>
                    </div>
                    <div class="person-review">
                        <p class="short-review">${shortReview}<button class="more-btn">${btnText}</button></p>
                        <p class="full-review hidden">${review}<button class="less-btn">less</button></p>
                        <div class="rating-star">
                            <span>${ratingStarString}</span>
                            <span class="not-rate">${notRatingStarString}</span>
                        </div>
                    </div>`   
    reviewList.prepend(li);

    const moreBtn = li.querySelector(".more-btn");
    const lessBtn = li.querySelector(".less-btn");
    const shortText = li.querySelector(".short-review");
    const fullText = li.querySelector(".full-review");

    moreBtn.addEventListener("click", () => {
            fullText.classList.remove("hidden");
            shortText.classList.add("hidden");
    });
    lessBtn.addEventListener("click", () => {
            fullText.classList.add("hidden");
            shortText.classList.remove("hidden");
    });
}


function giveRating(e){
    //1st remove all the previous rating
    removeStarRating();
    
    //add rating
    ratingNum = +e.target.dataset.id;
    for(let i=0; i<ratingNum; i++){
        document.getElementById(`star-${i+1}`).classList.add("rate");      
    }
}

function removeStarRating(){
    const allStarIcon = document.getElementsByClassName("star-icon");    
    for(let star of allStarIcon){
        star.classList.remove("rate");
    }
}

