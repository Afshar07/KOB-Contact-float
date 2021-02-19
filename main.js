const circle = document.querySelector(".circle");
const border = document.querySelector(".active");
const ic = document.querySelector(".fa-phone");
const elem = document.querySelector(".mcontainer");
circle.addEventListener("click", ()=>{
    let ac = circle.classList.toggle("circlicked");
    if(ac == true){
    border.style.display = "block";
    ic.style.display = "none";
    }else{
        border.style.display = "none";
        ic.style.display = "block";
    }
    document.addEventListener("click", (event)=>{
        let isclicked = circle.contains(event.target);
        if(!isclicked){
            circle.classList.remove("circlicked");
            border.style.display = "none";
            ic.style.display = "block";
        }
    })
});

