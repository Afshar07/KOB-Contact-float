const circle = document.querySelector(".circle");
const border = document.querySelector(".active");
circle.addEventListener("click", ()=>{
    let ac = circle.classList.toggle("circlicked");
    if(ac == true){
    border.style.display = "block";
    }else{
        border.style.display = "none"
    }
})