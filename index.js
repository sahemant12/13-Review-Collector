import {reviewData} from "./reviewData.js"
console.log(reviewData);

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
    li.innerHTML = `<div class="person">
                        <p>${name}</p>
                        <span id="time">${time}</span>
                    </div>
                    <div class="person-review">
                        <p>${review}</p>
                        <span>${rating}</span>
                    </div>`   
    reviewList.prepend(li);
}