
const userName = document.getElementById("name");
const userReview = document.getElementById("review");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click",storeReview);


function storeReview(){
    let name = userName.value.trim();
    let review = userReview.value.trim();
    console.log(name, review);
    
    if(!name && !review){
        return;
    }

    const now = new Date();
    const formatted = now.toLocaleString(); 

    const user = {
        name:name,
        review:review,
        time:formatted
    }   
    userName.value = "";
    userReview.value = "";

    displayReview(user);
}

function displayReview(review){
    const li = createElement("li");
    li.setAttribute("class","review-list");
    
}