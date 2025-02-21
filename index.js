import {reviewData} from "./reviewData.js"

const userName = document.getElementById("name");
const userReview = document.getElementById("review");
const submitBtn = document.getElementById("submit-btn");
const reviewList = document.getElementById("review-lists");

reviewData.forEach((data)=>renderReview(data));

submitBtn.addEventListener("click",storeReview);
function storeReview(){
    let name = userName.value.trim();
    let review = userReview.value.trim();
    
    if(!name && !review){
        return;
    }

    const now = new Date();
    const formatted = now.toLocaleString(); 

    const user = {
        name:name,
        review:review,
        rating:"4⭐",
        time:formatted
    }   
    userName.value = "";
    userReview.value = "";   
    reviewData.push(user);
    console.log(reviewData);
    renderReview(user);
}

function renderReview(data){   
    const {name, review, rating, time} = data;  
    const li = document.createElement("li");
    const shortReview = review.length > 50 ? review.substring(0, 50) + "..." : review;
    const btnText = shortReview === review ? "":  "more";
    li.innerHTML = `<div class="person">
                        <p>${name}</p>
                        <span id="time">${time}</span>
                    </div>
                    <div class="person-review">
                        <p class="short-review">${shortReview}<button class="more-btn">${btnText}</button></p>
                        <p class="full-review hidden">${review}<button class="less-btn">less</button></p>
                        <span>${rating}</span>
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
